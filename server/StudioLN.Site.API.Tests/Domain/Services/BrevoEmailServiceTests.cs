using System.Net;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using StudioLN.Site.API.Configuration;
using StudioLN.Site.API.Interfaces;
using StudioLN.Site.API.Services;
using StudioLN.Site.API.Tests.Fixtures;

namespace StudioLN.Site.API.Tests.Domain.Services;

public class BrevoEmailServiceTests
{
    private static readonly BrevoOptions ResilientOptions = new()
    {
        BaseUrl = "https://api.brevo.com",
        ApiKey = "test-api-key",
        SenderEmail = "noreply@example.com",
        SenderName = "StudioLN",
        AttemptTimeoutSeconds = 1,
        TotalTimeoutSeconds = 2,
        MaxRetryAttempts = 3,
        RetryBaseDelayMilliseconds = 1,
    };

    [Fact]
    public async Task SendAsync_WithEmail_SendsSenderRecipientAndContent()
    {
        // Arrange
        var handler = new FakeHttpMessageHandler(_ => new HttpResponseMessage(HttpStatusCode.Created));
        var service = CreateService(handler);

        // Act
        await service.SendAsync("user@example.com", null, "Onderwerp", "Tekst", CancellationToken.None);

        // Assert
        var sent = JsonDocument.Parse(handler.RequestBodies.Single()).RootElement;

        Assert.Equal(ResilientOptions.SenderEmail, sent.GetProperty("sender").GetProperty("email").GetString());
        Assert.Equal(ResilientOptions.SenderName, sent.GetProperty("sender").GetProperty("name").GetString());

        var recipient = Assert.Single(sent.GetProperty("to").EnumerateArray());
        Assert.Equal("user@example.com", recipient.GetProperty("email").GetString());
        Assert.False(recipient.TryGetProperty("name", out _));
        Assert.False(sent.TryGetProperty("replyTo", out _));

        Assert.Equal("Onderwerp", sent.GetProperty("subject").GetString());
        Assert.Equal("Tekst", sent.GetProperty("textContent").GetString());
    }

    [Fact]
    public async Task SendAsync_WithReplyTo_SendsReplyTo()
    {
        // Arrange
        var handler = new FakeHttpMessageHandler(_ => new HttpResponseMessage(HttpStatusCode.Created));
        var service = CreateService(handler);

        // Act
        await service.SendAsync("user@example.com", "reply@example.com", "Onderwerp", "Tekst", CancellationToken.None);

        // Assert
        var sent = JsonDocument.Parse(handler.RequestBodies.Single()).RootElement;
        Assert.Equal("reply@example.com", sent.GetProperty("replyTo").GetProperty("email").GetString());
    }

    [Fact]
    public async Task SendAsync_WithErrorStatusCode_ThrowsWithBrevoError()
    {
        // Arrange
        var handler = new FakeHttpMessageHandler(_ => new HttpResponseMessage(HttpStatusCode.Unauthorized)
        {
            Content = new StringContent("""{ "code": "unauthorized", "message": "Key not found" }""", Encoding.UTF8, "application/json"),
        });
        var service = CreateService(handler);

        // Act
        var exception = await Assert.ThrowsAsync<HttpRequestException>(
            () => service.SendAsync("user@example.com", null, "Onderwerp", "Tekst", CancellationToken.None));

        // Assert
        Assert.Equal(HttpStatusCode.Unauthorized, exception.StatusCode);
        Assert.Contains("unauthorized", exception.Message);
    }

    [Fact]
    public async Task SendAsync_WithErrorMessage_LeavesMessageOutOfException()
    {
        // Arrange
        var handler = new FakeHttpMessageHandler(_ => new HttpResponseMessage(HttpStatusCode.BadRequest)
        {
            Content = new StringContent("""{ "code": "invalid_parameter", "message": "user@example.com is not valid" }""", Encoding.UTF8, "application/json"),
        });
        var service = CreateService(handler);

        // Act
        var exception = await Assert.ThrowsAsync<HttpRequestException>(
            () => service.SendAsync("user@example.com", null, "Onderwerp", "Tekst", CancellationToken.None));

        // Assert
        Assert.DoesNotContain("user@example.com", exception.Message);
    }

    [Fact]
    public async Task SendAsync_WithNonJsonError_ThrowsWithStatusCode()
    {
        // Arrange
        var handler = new FakeHttpMessageHandler(_ => new HttpResponseMessage(HttpStatusCode.BadGateway)
        {
            Content = new StringContent("<html>Bad gateway</html>", Encoding.UTF8, "text/html"),
        });
        var service = CreateService(handler);

        // Act
        var exception = await Assert.ThrowsAsync<HttpRequestException>(
            () => service.SendAsync("user@example.com", null, "Onderwerp", "Tekst", CancellationToken.None));

        // Assert
        Assert.Equal(HttpStatusCode.BadGateway, exception.StatusCode);
    }

    [Fact]
    public async Task SendAsync_WhenBrevoReturnsTooManyRequestsOnce_Retries()
    {
        // Arrange
        var responses = new Queue<HttpResponseMessage>([
            new HttpResponseMessage(HttpStatusCode.TooManyRequests),
            new HttpResponseMessage(HttpStatusCode.Created),
        ]);
        var handler = new FakeHttpMessageHandler(_ => responses.Dequeue());
        var service = CreateResilientService(handler);

        // Act
        await service.SendAsync("user@example.com", null, "Onderwerp", "Tekst", CancellationToken.None);

        // Assert
        Assert.Equal(2, handler.RequestBodies.Count);
    }

    [Fact]
    public async Task SendAsync_WhenBrevoIsUnavailable_DoesNotRetry()
    {
        // Arrange
        var handler = new FakeHttpMessageHandler(_ => new HttpResponseMessage(HttpStatusCode.ServiceUnavailable));
        var service = CreateResilientService(handler);

        // Act
        await Assert.ThrowsAsync<HttpRequestException>(
            () => service.SendAsync("user@example.com", null, "Onderwerp", "Tekst", CancellationToken.None));

        // Assert
        Assert.Single(handler.RequestBodies);
    }

    [Fact]
    public async Task SendAsync_WhenAttemptTimesOut_DoesNotRetry()
    {
        // Arrange
        var handler = new FakeHttpMessageHandler(async (_, cancellationToken) =>
        {
            await Task.Delay(Timeout.InfiniteTimeSpan, cancellationToken);
            return new HttpResponseMessage(HttpStatusCode.Created);
        });
        var service = CreateResilientService(handler);

        // Act
        await Assert.ThrowsAnyAsync<Exception>(
            () => service.SendAsync("user@example.com", null, "Onderwerp", "Tekst", CancellationToken.None));

        // Assert
        Assert.Single(handler.RequestBodies);
    }

    private static IBrevoEmailService CreateResilientService(FakeHttpMessageHandler handler)
    {
        var services = new ServiceCollection();
        services.AddSingleton(Options.Create(ResilientOptions));
        services
            .AddHttpClient<IBrevoEmailService, BrevoEmailService>(client =>
            {
                client.BaseAddress = new Uri(ResilientOptions.BaseUrl);
                client.Timeout = TimeSpan.FromSeconds(ResilientOptions.TotalTimeoutSeconds);
            })
            .ConfigurePrimaryHttpMessageHandler(() => handler)
            .AddResilienceHandler("Brevo", pipeline => BrevoEmailService.ConfigureResilience(pipeline, ResilientOptions));

        return services.BuildServiceProvider().GetRequiredService<IBrevoEmailService>();
    }

    private static BrevoEmailService CreateService(FakeHttpMessageHandler handler)
    {
        var httpClient = new HttpClient(handler) { BaseAddress = new Uri(ResilientOptions.BaseUrl) };
        return new BrevoEmailService(httpClient, Options.Create(ResilientOptions));
    }
}

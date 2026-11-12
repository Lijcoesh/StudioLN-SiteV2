using System.Net;
using System.Text.Json;
using Microsoft.Extensions.Http.Resilience;
using Microsoft.Extensions.Options;
using Polly;
using StudioLN.Site.API.Configuration;
using StudioLN.Site.API.Interfaces;
using StudioLN.Site.API.Models;

namespace StudioLN.Site.API.Services;

public class BrevoEmailService : IBrevoEmailService
{
    public const string ApiKeyHeader = "api-key";

    private const string SendPath = "/v3/smtp/email";

    private readonly HttpClient _httpClient;
    private readonly IOptions<BrevoOptions> _brevoOptions;

    public BrevoEmailService(HttpClient httpClient, IOptions<BrevoOptions> brevoOptions)
    {
        _httpClient = httpClient;
        _brevoOptions = brevoOptions;
    }

    public static void ConfigureResilience(ResiliencePipelineBuilder<HttpResponseMessage> pipeline, BrevoOptions options)
    {
        // Brevo raadt geen retry op 5xx aan, en de mail kan dan al verstuurd zijn
        pipeline.AddRetry(new HttpRetryStrategyOptions
        {
            MaxRetryAttempts = options.MaxRetryAttempts,
            Delay = TimeSpan.FromMilliseconds(options.RetryBaseDelayMilliseconds),
            BackoffType = DelayBackoffType.Exponential,
            UseJitter = true,
            ShouldHandle = args => ValueTask.FromResult(args.Outcome.Result?.StatusCode is HttpStatusCode.TooManyRequests),
        });

        pipeline.AddTimeout(TimeSpan.FromSeconds(options.AttemptTimeoutSeconds));
    }

    public async Task SendAsync(string toEmail, string? replyToEmail, string subject, string textContent, CancellationToken cancellationToken)
    {
        var options = _brevoOptions.Value;
        var email = new BrevoEmail
        {
            Sender = new BrevoEmailAddress { Email = options.SenderEmail, Name = options.SenderName },
            To = [new BrevoEmailAddress { Email = toEmail, Name = null }],
            ReplyTo = replyToEmail is null ? null : new BrevoEmailAddress { Email = replyToEmail, Name = null },
            Subject = subject,
            TextContent = textContent,
        };

        using var response = await _httpClient.PostAsJsonAsync(SendPath, email, cancellationToken);

        // EnsureSuccessStatusCode laat de body weg, en daarin staat de foutcode van Brevo
        if (!response.IsSuccessStatusCode)
        {
            var code = await ReadErrorCodeAsync(response, cancellationToken);
            throw new HttpRequestException($"Brevo returned {(int)response.StatusCode}: {code}", null, response.StatusCode);
        }
    }

    // Alleen de code: de message van Brevo kan een e-mailadres uit het verzoek bevatten, en de exception komt in de log
    private static async Task<string> ReadErrorCodeAsync(HttpResponseMessage response, CancellationToken cancellationToken)
    {
        try
        {
            var error = await response.Content.ReadFromJsonAsync<BrevoError>(cancellationToken);
            return error?.Code ?? "no error code";
        }
        catch (JsonException)
        {
            return "no error code";
        }
    }
}

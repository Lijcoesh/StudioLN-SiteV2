using Microsoft.Extensions.Options;
using Moq;
using StudioLN.Site.API.Configuration;
using StudioLN.Site.API.Interfaces;
using StudioLN.Site.API.Services;
using StudioLN.Site.API.Tests.Dummies;
using StudioLN.Site.API.Tests.Fixtures;

namespace StudioLN.Site.API.Tests.Domain.Services;

public class ContactMessageServiceTests
{
    private const string Recipient = "info@example.com";

    private readonly Mock<IBrevoEmailService> brevoEmailServiceMock = new();
    private readonly FakeLogger<ContactMessageService> logger = new();

    [Fact]
    public async Task AddContactMessageAsync_WithPhone_SendsToRecipientWithReplyToVisitor()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage();
        var service = CreateService();

        // Act
        await service.AddContactMessageAsync(command, CancellationToken.None);

        // Assert
        brevoEmailServiceMock.Verify(
            s => s.SendAsync(
                Recipient,
                Dummy.Email,
                It.Is<string>(subject => subject.Contains(command.Name)),
                It.Is<string>(text => text.Contains(Dummy.Phone) && text.Contains(Dummy.Email) && text.Contains(command.Message)),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task AddContactMessageAsync_WithoutPhone_SendsWithPlaceholderForPhone()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(phone: null);
        var service = CreateService();

        // Act
        await service.AddContactMessageAsync(command, CancellationToken.None);

        // Assert
        brevoEmailServiceMock.Verify(
            s => s.SendAsync(
                Recipient,
                Dummy.Email,
                It.IsAny<string>(),
                It.Is<string>(text => text.Contains("Telefoon: -")),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task AddContactMessageAsync_WithFilledHoneypot_SucceedsWithoutSending()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(website: "https://spam.example.com");
        var service = CreateService();

        // Act
        await service.AddContactMessageAsync(command, CancellationToken.None);

        // Assert
        brevoEmailServiceMock.Verify(
            s => s.SendAsync(It.IsAny<string>(), It.IsAny<string?>(), It.IsAny<string>(), It.IsAny<string>(), It.IsAny<CancellationToken>()),
            Times.Never);
        Assert.DoesNotContain(logger.Entries, e => e.Message.Contains(command.Message) || e.Message.Contains(Dummy.Email));
    }

    private ContactMessageService CreateService()
    {
        return new ContactMessageService(
            brevoEmailServiceMock.Object,
            Options.Create(new MailOptions { ContactMessageRecipient = Recipient }),
            logger);
    }
}

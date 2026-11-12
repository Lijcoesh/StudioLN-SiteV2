using Microsoft.Extensions.Options;
using StudioLN.Site.API.Commands;
using StudioLN.Site.API.Configuration;
using StudioLN.Site.API.Interfaces;

namespace StudioLN.Site.API.Services;

public class ContactMessageService : IContactMessageService
{
    private const string Missing = "-";

    private readonly IBrevoEmailService _brevoEmailService;
    private readonly IOptions<MailOptions> _mailOptions;
    private readonly ILogger<ContactMessageService> _logger;

    public ContactMessageService(
        IBrevoEmailService brevoEmailService,
        IOptions<MailOptions> mailOptions,
        ILogger<ContactMessageService> logger)
    {
        _brevoEmailService = brevoEmailService;
        _mailOptions = mailOptions;
        _logger = logger;
    }

    public async Task AddContactMessageAsync(AddContactMessage command, CancellationToken cancellationToken)
    {
        // een bot krijgt gewoon een 200, zodat hij niet merkt dat er niets verstuurd is
        if (command.Website.Length > 0)
        {
            _logger.LogInformation("Contact message ignored: honeypot field was filled");
            return;
        }

        var subject = $"Contactformulier: {command.Name}";
        var textContent = $"""
            Naam: {command.Name}
            Telefoon: {command.Phone ?? Missing}
            E-mail: {command.Email}

            Bericht:
            {command.Message}
            """;

        await _brevoEmailService.SendAsync(_mailOptions.Value.ContactMessageRecipient, command.Email, subject, textContent, cancellationToken);
    }
}

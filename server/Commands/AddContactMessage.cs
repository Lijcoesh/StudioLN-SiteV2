using System.ComponentModel.DataAnnotations;
using StudioLN.Site.API.Validation;

namespace StudioLN.Site.API.Commands;

// De grenzen zijn gelijk aan of ruimer dan die in src/Config/contactForm.ts (contactLimits)
public record AddContactMessage
{
    [Length(1, 100)]
    [NoSurroundingWhitespace]
    [NoControlCharacters]
    public required string Name { get; init; }

    // Verplicht: het formulier vraagt altijd om een e-mailadres, de telefoon is optioneel
    [EmailAddress]
    [MaxLength(254)]
    [NoSurroundingWhitespace]
    [NoControlCharacters]
    public required string Email { get; init; }

    [Phone]
    [Length(6, 20)]
    [NoSurroundingWhitespace]
    public required string? Phone { get; init; }

    [Length(1, 2000)]
    [NoSurroundingWhitespace]
    public required string Message { get; init; }

    // Honeypot: mensen zien dit veld niet, dus gevuld betekent een bot
    [MaxLength(2000)]
    public required string Website { get; init; }
}

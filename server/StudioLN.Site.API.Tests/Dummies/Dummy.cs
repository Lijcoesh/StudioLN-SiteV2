using StudioLN.Site.API.Commands;

namespace StudioLN.Site.API.Tests.Dummies;

public static class Dummy
{
    public const string Email = "klant@example.com";

    public const string Phone = "0612345678";

    public static AddContactMessage CreateAddContactMessage(string? phone = Phone, string website = "")
    {
        return new AddContactMessage
        {
            Name = "Jan de Vries",
            Email = Email,
            Phone = phone,
            Message = "Ik ben schilder en zoek een website voor mijn bedrijf.",
            Website = website,
        };
    }
}

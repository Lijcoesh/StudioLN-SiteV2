using System.ComponentModel.DataAnnotations;

namespace StudioLN.Site.API.Configuration;

public class MailOptions
{
    [Required]
    [EmailAddress]
    public required string ContactMessageRecipient { get; set; }
}

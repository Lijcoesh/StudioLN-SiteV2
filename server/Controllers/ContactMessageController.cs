using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using StudioLN.Site.API.Commands;
using StudioLN.Site.API.Configuration;
using StudioLN.Site.API.Interfaces;

namespace StudioLN.Site.API.Controllers;

[ApiController]
[Route("api/contact-messages")]
public class ContactMessageController(IContactMessageService contactMessageService) : ControllerBase
{
    [HttpPost]
    [EnableRateLimiting(RateLimitOptions.ContactMessagePolicy)]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status429TooManyRequests)]
    public async Task AddContactMessage(AddContactMessage command, CancellationToken cancellationToken)
    {
        await contactMessageService.AddContactMessageAsync(command, cancellationToken);
    }
}

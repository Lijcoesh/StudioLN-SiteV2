using System.Net;

namespace StudioLN.Site.API.Exceptions;

public class TooManyRequestsException(string message) : DomainException(message)
{
    public override HttpStatusCode StatusCode => HttpStatusCode.TooManyRequests;
}

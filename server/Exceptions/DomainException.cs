using System.Net;

namespace StudioLN.Site.API.Exceptions;

public abstract class DomainException(string message) : Exception(message)
{
    public abstract HttpStatusCode StatusCode { get; }
}

using StudioLN.Site.API.Commands;

namespace StudioLN.Site.API.Interfaces;

public interface IContactMessageService
{
    Task AddContactMessageAsync(AddContactMessage command, CancellationToken cancellationToken);
}

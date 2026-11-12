using StudioLN.Site.API.Validation;

namespace StudioLN.Site.API.Configuration;

public class ApiOptions
{
    [CidrNotation]
    public string[] TrustedProxyNetworks { get; set; } = [];
}

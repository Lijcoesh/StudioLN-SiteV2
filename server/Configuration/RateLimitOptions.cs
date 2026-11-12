using System.ComponentModel.DataAnnotations;
using System.Threading.RateLimiting;

namespace StudioLN.Site.API.Configuration;

public class RateLimitOptions
{
    public const string ContactMessagePolicy = "ContactMessage";

    public const int MaxPermitLimit = 10_000;

    [Range(1, MaxPermitLimit)]
    public required int ContactMessagePermitLimit { get; set; }

    [Range(1, int.MaxValue)]
    public required int ContactMessageWindowSeconds { get; set; }

    public static TokenBucketRateLimiterOptions CreateTokenBucket(int permitLimit, int windowSeconds)
    {
        return new TokenBucketRateLimiterOptions
        {
            TokenLimit = permitLimit,
            TokensPerPeriod = 1,

            // niet TimeSpan.FromSeconds(windowSeconds / permitLimit): dat is een integer-deling
            ReplenishmentPeriod = TimeSpan.FromSeconds(windowSeconds) / permitLimit,
            QueueLimit = 0,
        };
    }
}

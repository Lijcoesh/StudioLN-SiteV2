using System.Globalization;
using System.Threading.RateLimiting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.Extensions.Options;
using StudioLN.Site.API.Configuration;
using StudioLN.Site.API.Exceptions;
using StudioLN.Site.API.Extensions;
using StudioLN.Site.API.Interfaces;
using StudioLN.Site.API.Middleware;
using StudioLN.Site.API.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services
    .AddOptions<ApiOptions>()
    .Bind(builder.Configuration.GetRequiredSection("Api"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services
    .AddOptions<ForwardedHeadersOptions>()
    .Configure<IOptions<ApiOptions>>((forwarded, api) =>
    {
        forwarded.KnownIPNetworks.Clear();
        forwarded.KnownProxies.Clear();

        if (api.Value.TrustedProxyNetworks.Length == 0)
        {
            forwarded.ForwardedHeaders = ForwardedHeaders.None;
            return;
        }

        forwarded.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
        foreach (var network in api.Value.TrustedProxyNetworks)
        {
            forwarded.KnownIPNetworks.Add(System.Net.IPNetwork.Parse(network));
        }
    });

builder.Services
    .AddOptions<RateLimitOptions>()
    .Bind(builder.Configuration.GetRequiredSection("RateLimit"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services.AddRateLimiter(limiter =>
    limiter.OnRejected = (context, _) =>
    {
        if (context.Lease.TryGetMetadata(MetadataName.RetryAfter, out var retryAfter))
        {
            context.HttpContext.Response.Headers.RetryAfter =
                ((int)Math.Ceiling(retryAfter.TotalSeconds)).ToString(CultureInfo.InvariantCulture);
        }

        throw new TooManyRequestsException("Too many requests");
    });
builder.Services
    .AddOptions<RateLimiterOptions>()
    .Configure<IOptions<RateLimitOptions>>((limiter, rateLimit) =>
        limiter.AddPolicy(RateLimitOptions.ContactMessagePolicy, context =>
            RateLimitPartition.GetTokenBucketLimiter(
                context.Connection.RemoteIpAddress.ToRateLimitPartitionKey(),
                _ => RateLimitOptions.CreateTokenBucket(rateLimit.Value.ContactMessagePermitLimit, rateLimit.Value.ContactMessageWindowSeconds))));

builder.Services.AddHealthChecks();

builder.Services
    .AddOptions<MailOptions>()
    .Bind(builder.Configuration.GetRequiredSection("Mail"))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services.AddTransient<IContactMessageService, ContactMessageService>();

builder.Services
    .AddOptions<BrevoOptions>()
    .Bind(builder.Configuration.GetRequiredSection("Brevo"))
    .ValidateDataAnnotations()
    .ValidateOnStart();
builder.Services
    .AddHttpClient<IBrevoEmailService, BrevoEmailService>((services, client) =>
    {
        var brevo = services.GetRequiredService<IOptions<BrevoOptions>>().Value;
        client.BaseAddress = new Uri(brevo.BaseUrl);
        client.Timeout = TimeSpan.FromSeconds(brevo.TotalTimeoutSeconds);
        client.DefaultRequestHeaders.Add(BrevoEmailService.ApiKeyHeader, brevo.ApiKey);
    })
    .AddResilienceHandler("Brevo", (pipeline, context) =>
        BrevoEmailService.ConfigureResilience(pipeline, context.ServiceProvider.GetRequiredService<IOptions<BrevoOptions>>().Value));

var app = builder.Build();

app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseForwardedHeaders();

app.UseHttpsRedirection();

app.UseRateLimiter();

app.MapControllers();
app.MapHealthChecks("/api/health");

app.Run();

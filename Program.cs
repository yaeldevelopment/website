using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Umbraco.Cms.Web.Common.DependencyInjection;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// Load environment variables
builder.Configuration.AddEnvironmentVariables();

// Retrieve and set the connection string
var connectionString = Environment.GetEnvironmentVariable("UMBRACO_CONNECTION_STRING");
if (!string.IsNullOrEmpty(connectionString))
{
    builder.Configuration["ConnectionStrings:UmbracoDbDSN"] = connectionString;
}

// Configure Umbraco services
builder.Services.AddUmbraco(builder.Environment, builder.Configuration)
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers();

var app = builder.Build();

// Boot Umbraco with error handling
try
{
    await app.BootUmbracoAsync();
    Console.WriteLine("Umbraco booted successfully.");
}
catch (Exception ex)
{
    Console.WriteLine($"Umbraco failed to boot: {ex.Message}");
    throw;
}

// Configure the Umbraco middleware pipeline
app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseInstallerEndpoints();
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

// Bind to the PORT environment variable or default to 8080
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
await app.RunAsync($"http://0.0.0.0:{port}");

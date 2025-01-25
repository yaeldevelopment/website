using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Localization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Umbraco.Cms.Core.DependencyInjection;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// Load environment variables
builder.Configuration.AddEnvironmentVariables();

// Retrieve and set the connection string from environment variables
var connectionString = Environment.GetEnvironmentVariable("UMBRACO_CONNECTION_STRING");
if (!string.IsNullOrEmpty(connectionString))
{
    builder.Configuration["ConnectionStrings:UmbracoDbDSN"] = connectionString;
}

// Step 4: Setup Umbraco and pass IWebHostEnvironment and IConfiguration to AddUmbraco
builder.Services.AddUmbraco(builder.Environment, builder.Configuration)
    .AddBackOffice()
    .AddWebsite()
    .AddComposers()
    .Build();

// Add Razor Pages services (for Umbraco's Razor Pages)
builder.Services.AddRazorPages();
builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    options.DefaultRequestCulture = new RequestCulture("en-US");
});
WebApplication app = builder.Build();

// Step 5: Run Umbraco
await app.BootUmbracoAsync();

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

app.UseStaticFiles();
app.UseRouting();
// Other middleware (like routing, authorization, etc.)
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.UseAuthorization();
app.MapControllers();
// Bind to the PORT environment variable or default to 8080
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
await app.RunAsync($"http://0.0.0.0:{port}");


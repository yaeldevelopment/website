using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// טוען משתני סביבה בצורה מפורשת
builder.Configuration.AddEnvironmentVariables();

// מקבל את מחרוזת החיבור ממשתנה הסביבה
var connectionString = Environment.GetEnvironmentVariable("UMBRACO_CONNECTION_STRING");
if (!string.IsNullOrEmpty(connectionString))
{
    // מעדכן את ההגדרות
    builder.Configuration["ConnectionStrings:UmbracoDbDSN"] = connectionString;

}


// קביעת הגדרות Umbraco
builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

WebApplication app = builder.Build();

// הפעלת Umbraco עם ניטור שגיאות
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
 await app.RunAsync("http://0.0.0.0:8080"); // Ensure the app listens on 8080
//await app.RunAsync();

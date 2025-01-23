using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);



// טעינת משתני סביבה
builder.Host.ConfigureAppConfiguration((hostingContext, config) =>
{
    config.AddEnvironmentVariables(); // מוסיף משתני סביבה
});

// קוד הגדרת חיבור לבסיס נתונים
var connectionString = Environment.GetEnvironmentVariable("UMBRACO_CONNECTION_STRING");
if (!string.IsNullOrEmpty(connectionString))
{
    builder.Configuration["ConnectionStrings:UmbracoDbDSN"] = connectionString;

}

// הדפס את מחרוזת החיבור לוודא שהיא קיימת


// קביעת הגדרות Umbraco
builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

WebApplication app = builder.Build();

// הגדרת אמצעי ניטור ובדיקת טעינת Umbraco
try
{
    await app.BootUmbracoAsync();

}
catch (Exception ex)
{

    throw; // זרוק את השגיאה למעלה כדי שתופיע בלוגים
}

// שימוש באמצעי Umbraco
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

// הרצת האפליקציה
await app.RunAsync();

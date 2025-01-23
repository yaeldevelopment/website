using System.Net;
using System.IO;
using Microsoft.Data.Sqlite;
using System.Data.SQLite;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// קביעת נתיב תקיית ה-ContentRoot ישירות
// ���� �� ���� ����� ����� ��� UMBRACO_CONNECTION_STRING
var connectionString = Environment.GetEnvironmentVariable("UMBRACO_CONNECTION_STRING");

if (!string.IsNullOrEmpty(connectionString))
{
    // ���� �� ConnectionStrings:UmbracoDbDSN
    builder.Configuration["ConnectionStrings:UmbracoDbDSN"] = connectionString;
}

// Step 4: Setup Umbraco
builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

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

await app.RunAsync();

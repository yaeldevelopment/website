WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// קריאת מחרוזת החיבור ממשתנה סביבה או מהגדרות הקובץ
var connectionString = Environment.GetEnvironmentVariable("UMBRACO_CONNECTION_STRING")
    ?? builder.Configuration.GetConnectionString("umbracoDbDSN");

// אם המחרוזת ריקה, זריקת שגיאה כדי למנוע קריסה מאוחרת יותר
if (string.IsNullOrEmpty(connectionString))
{
    throw new Exception("? Missing Umbraco Connection String. Please set 'UMBRACO_CONNECTION_STRING' environment variable or define it in appsettings.json.");
}

// הגדרת מחרוזת החיבור בתוך התצורה של Umbraco
builder.Configuration["ConnectionStrings:umbracoDbDSN"] = connectionString;

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

WebApplication app = builder.Build();

await app.BootUmbracoAsync();

app.UseHttpsRedirection();

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

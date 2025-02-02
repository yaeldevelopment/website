﻿using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// קבלת מחרוזת חיבור ממשתנה סביבה או מקובץ ההגדרות
var connectionString = Environment.GetEnvironmentVariable("UMBRACO_CONNECTION_STRING")
    ?? builder.Configuration.GetConnectionString("umbracoDbDSN");

if (string.IsNullOrEmpty(connectionString))
{
    throw new Exception("❌ Missing Umbraco Connection String. Please set 'UMBRACO_CONNECTION_STRING' environment variable or define it in appsettings.json.");
}

// הגדרת מחרוזת החיבור
builder.Services.Configure<Umbraco.Cms.Core.Configuration.Models.ConnectionStrings>(options =>
{
    options.ConnectionString = connectionString;
});

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

var app = builder.Build();

await app.BootUmbracoAsync();

app.UseHttpsRedirection();
app.UseStaticFiles(); // חובה ל- Render כדי שה- BackOffice יעבוד

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
    RequestPath = ""
});

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
//await app.RunAsync("http://0.0.0.0:8080");

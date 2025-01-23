using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Website.Controllers;
using yael_project.Models;

namespace yael_project.Controllers
{

    public class FunctionsController : UmbracoApiController
    {
        private readonly IContentService _contentService;

       
        
        public FunctionsController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider, IContentService contentService)
            {
         _contentService = contentService;
         }



        public ActionResult Index()
        {
            return Content("hello world");
        }
        [HttpPost]
        [AllowAnonymous]

        public async Task<IActionResult> Send_Mail([FromBody] FormData data)
        {

         Task<bool> send_mail_s=  Helper.Send_Mail(_contentService, @"<!DOCTYPE html>
<html lang='he'>
<head>
    <meta charset='UTF-8'>
<style>
p {
    margin: 0;
}</style>
</head>
<body dir='rtl' style='font-family: Arial; text-align: right;'> <p>
שם הלקוח:" + data.name+ "</p><p>" + "טלפון הלקוח:"+data.phone+ "</p><p>" + ((data.message!="")?("מעונין ב-" +data.message):"") + "</p><p>" + ((data.email_contact != "") ? ("מייל הלקוח:" + data.email_contact) : "")+ "</p></body></html>");
            string rich_text;
            if (send_mail_s.Result)
            {
                rich_text = Helper.GetSettingValue(_contentService, "rich_text_succses_contact", "contactPage");
                return Ok(new { success = true, message = rich_text });
            }
            else
            {
                rich_text = Helper.GetSettingValue(_contentService, "rich_text_fail_contact", "contactPage");
                return StatusCode(400, new { error = false, message = rich_text });
            }
     
        }

        public class FormData
        {
            public string name { get; set; }
            public string? email_contact { get; set; }
            public string phone { get; set; }
            public string? message { get; set; }
        }
    }
}

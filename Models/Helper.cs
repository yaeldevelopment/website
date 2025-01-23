using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common;
using NUglify.JavaScript.Syntax;
using Umbraco.Cms.Core.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using static System.Runtime.InteropServices.JavaScript.JSType;
using DocumentFormat.OpenXml.Drawing.Charts;


using Microsoft.AspNetCore.Authorization;

using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;

using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;

using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Website.Controllers;
using yael_project.Models;
using Newtonsoft.Json.Linq;
using NPoco.fastJSON;

namespace yael_project.Models
{
    public enum Subject { Send_Email}
    public  class Helper
    {
        public static string GetSettingValue(IContentService _contentService, string data, string Alias = "settings")
        {
            var settingsNode = _contentService.GetRootContent()
                                    .FirstOrDefault(x => x.ContentType.Alias == Alias);

            if (settingsNode != null && settingsNode.HasProperty(data))
            {
                var value = settingsNode.GetValue<string>(data);

                // אם הפלט הוא JSON (מערך או אובייקט)
                if (IsJson(value))
                {
                    try
                    {
                        // בדיקה אם JSON הוא אובייקט או מערך
                        var token = Newtonsoft.Json.Linq.JToken.Parse(value);

                        if (token is Newtonsoft.Json.Linq.JObject jsonObject)
                        {
                            // JSON כאובייקט
                            if (jsonObject["markup"] != null)
                            {
                                return jsonObject["markup"].ToString();
                            }

                            if (jsonObject["mediaKey"] != null)
                            {
                                return jsonObject["mediaKey"].ToString();
                            }
                        }
                        else if (token is Newtonsoft.Json.Linq.JArray jsonArray)
                        {
                            // JSON כמערך
                            foreach (var item in jsonArray)
                            {
                                if (item is Newtonsoft.Json.Linq.JObject obj && obj["mediaKey"] != null)
                                {
                                    return obj["mediaKey"].ToString();
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"JSON Deserialization Error: {ex.Message}");
                    }
                }

                return value; // החזרת הערך אם הוא לא JSON
            }

            return null; // ערך ברירת מחדל
        }


        // בדיקה אם הפלט הוא JSON
        private static bool IsJson(string input)
        {
            if (input == null)
            {
                return false;
            }
            input = input.Trim();
            return (input.StartsWith("{") && input.EndsWith("}")) ||
                   (input.StartsWith("[") && input.EndsWith("]"));
        }


        public async static Task<bool> Send_Mail(IContentService contentService, string body) {
     
      
       
            try
            {

                MailMessage message = new MailMessage(new MailAddress(Environment.GetEnvironmentVariable("send_mail")), new MailAddress(GetSettingValue(contentService, "contact_mail")));


                message.Subject = "פנית לקוח";
                message.Body =body ;

                message.IsBodyHtml = true;

                using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587))
                {

                    client.Credentials = new NetworkCredential(Environment.GetEnvironmentVariable("send_mail"), Environment.GetEnvironmentVariable("pass_mail"));
                    client.EnableSsl = true;
                    client.DeliveryMethod = SmtpDeliveryMethod.Network;

                    await client.SendMailAsync(message);
                }
                return true;

            }
            catch (Exception ex)
            {
                Write_Subject(Subject.Send_Email, ex);
                return false;
            }
        }
        public static void Write_Subject(Subject subject,Exception e )
        {

            // מקבל את התיקיה הבסיסית של הפרויקט
            string basePath = AppDomain.CurrentDomain.BaseDirectory;

            // חזרה לשורש הפרויקט (איפה ש-wwwroot או קבצי השורש)
            string projectRootPath = Path.GetFullPath(Path.Combine(basePath, @"..\..\..\"));

            // הגדרת נתיב לתיקיית Logs ביחס לשורש הפרויקט
            string folderPath = Path.Combine(projectRootPath, "Logs");

            // הגדרת שם הקובץ
            string fileName = subject + "_" + DateTime.Now.Month + ".txt";

            // יצירת הנתיב המלא
            string path = Path.Combine(folderPath, fileName);

            // בדיקה אם הקובץ קיים, ואם לא - יצירה
            if (!File.Exists(path)) // בדיקה אם הקובץ קיים
            {
                // יצירת הקובץ
                File.WriteAllText(path, $"Message: {e.Message} Date: {DateTime.Now}"); // אפשר לשים תוכן ראשוני בקובץ במקום מחרוזת ריקה
            }
            else
            {  
                File.AppendAllText(path, $"\nMessage: {e.Message} Date: {DateTime.Now}");

            }



        }
        public static string GetFilePathByMediaKey(IMediaService mediaService, string mediaKey)
        {
            // חפש את המדיה באמצעות המפתח
            var mediaItem = mediaService.GetById(Guid.Parse(mediaKey));

            if (mediaItem != null)
            {
                // קבלת ה-Url של המדיה, עליך להשתמש בשדה המתאים (הנחה שזה "umbracoFile" במקרה של קובץ מדיה)
                var mediaUrl = mediaItem.GetValue<string>("umbracoFile");

                if (string.IsNullOrEmpty(mediaUrl))
                {
                    return "File not found or invalid URL.";
                }
                // פענוח המחרוזת JSON
                var mediaUrlObject = JObject.Parse(mediaUrl);

                // שליפת ה-URL מתוך שדה "src"
                 mediaUrl = mediaUrlObject["src"]?.ToString();

                return mediaUrl;
            }

            return "Media not found.";
        }
    }
}

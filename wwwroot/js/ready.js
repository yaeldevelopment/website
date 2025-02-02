$(document).ready(function () {
    $("#submitButton").prop("disabled", true);
    // הפעלת הסליידר
    $('.slider-container').slick({
        rtl: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,           // הפעלה אוטומטית
        autoplaySpeed: 3000,      // זמן בין שקופיות
        dots: false,               // נקודות ניווט
        arrows: true,             // הצגת חיצים
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // הוספת שיטה מותאמת אישית לבדוק את ה- regex של הדוא"ל
    $.validator.addMethod("emailRegex", function (value, element) {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return this.optional(element) || regex.test(value);
    }, "הכנס כתובת דוא\"ל חוקית");
    // הוספת שיטה מותאמת אישית לבדוק את ה- regex של מספר הטלפון
    $.validator.addMethod("phoneRegex", function (value, element) {
        let regex = /^\+?\d{1,3}\d{7,15}$/;
        return this.optional(element) || regex.test(value);
    }, "הכנס מספר טלפון תקני");
    $("#contactForm").validate({
        rules: {
            name: { required: true, minlength: 2 },
            email_contact: {
                emailRegex: true // משתמש בשיטה המותאמת אישית לבדוק את הדוא"ל
            },
            phone: {
                required: true,  // שדה חובה
                phoneRegex: true // משתמש בשיטה המותאמת אישית לבדוק את מספר הטלפון
            }
           
        },
        messages: {
            name: { required: "הכנס שם", minlength: "השדה שם חייב להכיל 2 תויים לפחות" },
            email_contact: {
    
                emailRegex: "הכנס כתובת דוא\"ל חוקית",

            },
            phone: {
                required: "הכנס מספר טלפון",
                phoneRegex: "הכנס מספר טלפון תקני"
            }
        
        },
        onfocusout: function (element) {
            $(element).valid(); // מפעיל את הולידציה על השדה הספציפי
        }
  
    });
    $("input").on("blur", function () {
        $(".general_form").valid();  // מבצע בדיקת וולידציה על כל השדות
    });
    $(".general_form").on("keyup", function () {
        // אם כל השדות תקניים, נבטל את ה- disabled מהכפתור
        if ($(".general_form").valid()) {
            $("#submitButton").prop("disabled", false);
        } else {
            $("#submitButton").prop("disabled", true);
        }
    });
    $(".general_form").on("submit", function (e) {
        // אם כל השדות תקניים, נבטל את ה- disabled מהכפתור
         e.preventDefault();
        // אם יש בעיות וולידציה, נמנע מהשליחה
        if ($(".general_form").valid()) {
            let form = e.currentTarget;
            $(form).find("#submitButton").prop("disabled", true);
            let form_func = $(form).find(" .form-func").val();
            let formData = $(this).serializeArray();
            let formDataObj = {};
            $.each(formData, function () {
                formDataObj[this.name] = this.value;
            });
            $.ajax({
                url: '/umbraco/api/Functions/' + form_func,
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(formDataObj),
               
                success: function (response) {
                    showPopup("success", response.message)
                    form.reset();
                },
                error: function (response) {
                    showPopup("error", response.responseJSON.message)
                    form.reset();
                }
            });
        }
   
    });

   

   

        // Close popup on click
        $('.popup-close').click(function () {
            $(this).parent('.popup').addClass("hide");
            $("#overlay").addClass("hide");
        });

        // Function to show popup
  

});
function showPopup(err_suc, richtext) {
        $("#" + err_suc + "-popup .rich_text").html(richtext);
        $("#" + err_suc + "-popup").removeClass("hide");
        $("#overlay").removeClass("hide");
}

// פונקציה להגדיר Cookie
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000); // מחשב את הזמן בשעות
    const expires = "expires=" + date.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// פונקציה לקבלת ערך Cookie
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}
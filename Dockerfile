# בניית התמונה
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY *.csproj ./ 
RUN dotnet restore --no-cache
RUN dotnet --info
COPY . ./

RUN dotnet publish -c Release -o out

# יצירת תמונה מתוך aspnet
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

# הגדרת משתנים לסביבת העבודה
ENV ASPNETCORE_ENVIRONMENT=Production
ENV ContentRoot=/app/wwwroot
ENV WebRoot=/app/wwwroot

# העתקת הקבצים שהיו מבודדים במהלך הבנייה
COPY --from=build /app/out ./ 

EXPOSE 8080

# הפעלת האפליקציה
ENTRYPOINT ["dotnet", "yael_project.dll"]

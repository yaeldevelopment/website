# שלב ה-build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# העתק את קבצי הפרויקט וה-csproj
COPY *.csproj ./
RUN dotnet restore

# העתק את כל הקבצים ובנה את הפרויקט
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# אם יש תיקיות או קבצים חסרים (כמו App_Data), יש ליצור אותם
RUN mkdir -p /app/wwwroot /app/App_Data

# שלב הריצה
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# העתק את התוכן שנבנה בשלב ה-build
COPY --from=build /app/publish .
COPY --from=build /app/wwwroot /app/wwwroot
COPY --from=build /app/App_Data /app/App_Data

# צור תיקיית מדיה (אם חסרה)
RUN mkdir -p /app/wwwroot/media

# הדפסת תוכן התיקייה לבדיקת שגיאות
RUN ls -la /app

# הפעלת הקובץ הראשי
ENTRYPOINT ["dotnet", "yael_project.dll"]

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# העתק את קבצי הפרויקט וה-csproj
COPY *.csproj ./
RUN dotnet restore

# העתק את כל הקבצים ובנה את הפרויקט
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# יצירת תיקיית App_Data (אם היא לא קיימת)
RUN mkdir -p /app/App_Data

# שלב ריצה
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# העתק את התוכן משלב ה-build
COPY --from=build /app/publish .
COPY --from=build /app/wwwroot /app/wwwroot
COPY --from=build /app/App_Data /app/App_Data

# צור תיקיית מדיה (למקרה שחסרה)
RUN mkdir -p /app/wwwroot/media

# הדפסת תוכן התיקייה לבדיקת שגיאות
RUN ls -la /app

ENTRYPOINT ["dotnet", "yael_project.dll"]

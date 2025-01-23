# שלב 1: בניית האפליקציה
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# העתק את קובצי הפרויקט
COPY *.csproj ./
RUN dotnet restore

# העתק את כל הקבצים ובנה את הפרויקט
COPY . ./
RUN dotnet publish -c Release -o out

# שלב 2: הפעלת האפליקציה
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app

# העתק את הקבצים שפורסו מהשלב הקודם
COPY --from=build /app/out ./

# חשיפת הפורט שבו האפליקציה תרוץ (ברירת מחדל: 8080 או 80)
EXPOSE 8080

# הפעלת האפליקציה
ENTRYPOINT ["dotnet", "yael_project.dll"]

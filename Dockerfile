FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# העתק את קבצי הפרויקט וה-csproj
COPY *.csproj ./
RUN dotnet restore

# העתק את שאר הקבצים
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# שלב ריצה
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .

# צור את התיקייה wwwroot/media אם היא חסרה
RUN mkdir -p /app/wwwroot/media
ENTRYPOINT ["dotnet", "yael_project.dll"]



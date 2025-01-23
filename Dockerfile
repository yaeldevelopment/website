FROM mcr.microsoft.com/dotnet/sdk:8.0-windowsservercore-ltsc2022 AS build
WORKDIR /app

# Copy and restore project
COPY . .
RUN dotnet restore

# Build and publish
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0-windowsservercore-ltsc2022
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "yael_project.dll"]



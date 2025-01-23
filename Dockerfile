FROM mcr.microsoft.com/dotnet/sdk:8.0-windowsservercore-ltsc2022 AS build
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# העתק את קבצי ה-csproj לפני הפעלת restore
COPY *.csproj ./
RUN dotnet restore

# העתק את שאר הקבצים
COPY . ./
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish 

ENTRYPOINT ["dotnet", "FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# העתק את קבצי ה-csproj לפני הפעלת restore
COPY *.csproj ./
RUN dotnet restore

# העתק את שאר הקבצים
COPY . ./
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .dll"]



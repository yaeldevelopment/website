# Specify the base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 80
EXPOSE 443

# Specify the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["yael_project/yael_project.csproj", "yael_project/"]
RUN dotnet restore "yael_project/yael_project.csproj"
COPY . .
WORKDIR "/src/yael_project"
RUN dotnet build "yael_project.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "yael_project.csproj" -c Release -o /app/publish

# Final stage to set up the runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "yael_project.dll"]



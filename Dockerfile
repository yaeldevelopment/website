# Use the official .NET SDK image for building the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /app

# Use a custom NuGet package directory to improve build cache usage
ENV NUGET_PACKAGES=/root/.nuget/packages

# Copy project files and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the application code
COPY . ./
COPY . /app/

# Publish the application in Release mode
RUN dotnet publish -c Release -o /app/publish

# Use the official .NET runtime image for running the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Set the working directory
WORKDIR /app

# Copy the build output from the build stage
COPY --from=build /app/publish .

# Ensure directories exist for runtime
RUN mkdir -p /app/wwwroot/media /app/wwwroot/css /app/wwwroot/js /app/wwwroot/lib /app/App_Data
RUN chmod -R 777 /app/wwwroot /app/App_Data

# Copy static files (if they exist in the source code)
COPY ./wwwroot/css /app/wwwroot/css
COPY ./wwwroot/js /app/wwwroot/js
COPY ./wwwroot/lib /app/wwwroot/lib
COPY ./wwwroot/media /app/wwwroot/media
# Set the ASP.NET Core URLs environment variable
ENV ASPNETCORE_URLS=http://+:8080

# Start the application
ENTRYPOINT ["dotnet", "yael_project.dll"]
# Expose port 8080
EXPOSE 8080
EXPOSE 80
EXPOSE 443
# Run the application

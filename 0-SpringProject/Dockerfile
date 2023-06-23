# Base image
FROM adoptopenjdk:11-jre-hotspot

# Set the working directory
WORKDIR /app

# Copy the application jar file
COPY target/spring-react-app.jar app.jar

# Expose port 8080
EXPOSE 8080

# Set the entrypoint command
ENTRYPOINT ["java", "-jar", "app.jar"]

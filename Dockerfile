# Single stage with Tomcat (simpler)
FROM tomcat:9.0-jre17

# Remove default apps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy your WAR file (change packaging to war in pom.xml)
COPY target/*.war /usr/local/tomcat/webapps/ROOT.war

# Or if using JAR with embedded Tomcat
FROM tomcat:9.0-jre17
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
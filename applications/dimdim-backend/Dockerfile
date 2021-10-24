FROM maven:3.8.1-jdk-11 AS BUILD

LABEL HubSlashInformationCorp <devops@slashicorp.com.br>

COPY . .

RUN mvn package -DskipTests

FROM openjdk:11-jre

ENV _JAVA_OPTIONS="-Djava.net.preferIPv4Stack=true"

COPY --from=BUILD target/*.jar /app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
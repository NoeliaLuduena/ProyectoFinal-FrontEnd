
FROM  amazoncorretto:11-alpine-jdk
MAINTAINER NBL
COPY target/nbl-0.0.1-SNAPSHOT.jar   nbl-app.jar
ENTRYPOINT ["java","-jar","/nbl-app.jar"]
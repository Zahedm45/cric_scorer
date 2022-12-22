FROM maven:3.8.6-openjdk-18 AS MAVEN
WORKDIR /tmp
COPY /src/ ./src
COPY /pom.xml ./
RUN mvn package

FROM node:18-slim AS REACT
WORKDIR /tmp
COPY /web/package.json  ./
RUN yarn install --network-timeout=500000
COPY /web/src ./src
COPY /web/public ./public
RUN yarn build

FROM openjdk:18-alpine
WORKDIR /tmp
COPY --from=MAVEN /tmp/target ./
COPY --from=REACT /tmp/build ./src/Main/webapp/
EXPOSE 8080
CMD ["java","-Xmx1024m", "-jar", "/tmp/devops-fatjar.jar"]
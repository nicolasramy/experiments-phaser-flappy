FROM node:20-buster

LABEL mantainer="Nicolas Ramy <nicolas.ramy@darkelda.com>"

USER root

RUN mkdir /app
COPY . /app
WORKDIR /app

VOLUME ["/app"]

RUN npm install -g typescript
RUN npm install phaser@3.60.0

USER node

FROM node:20-buster

LABEL mantainer="Nicolas Ramy <nicolas.ramy@darkelda.com>"

USER root

RUN mkdir /app
COPY . /app
WORKDIR /app

VOLUME ["/app"]

RUN npm install

CMD ["npm", "start"]

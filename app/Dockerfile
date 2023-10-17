FROM node:20-buster

LABEL mantainer="Nicolas Ramy <nicolas.ramy@darkelda.com>"

USER root

RUN mkdir /app
COPY . /app
WORKDIR /app

VOLUME ["/app"]

RUN npm install -g typescript
RUN npm install --global http-server
RUN npm install phaser@3.60.0

CMD ["http-server", "-a", "0.0.0.0", "-p", "5000", "-o", "/public", "--no-dotfiles"]

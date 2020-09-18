FROM node:10
RUN apt-get -qq update && \
  apt-get -qq dist-upgrade && \
  apt-get -qq install pdftk && \
  apt-get -qq clean

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
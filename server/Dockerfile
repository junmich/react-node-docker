FROM node:lts-slim

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api
COPY package.json .
RUN npm install
RUN npm install nodemon -g
COPY . .



EXPOSE 7000

# You can change this
CMD [ "npm", "run", "dev" ]


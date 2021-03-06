FROM node:latest
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY .env /usr/src/app
RUN yarn install && yarn cache clean
COPY . /usr/src/app
EXPOSE 4000
CMD [ "yarn", "start" ]
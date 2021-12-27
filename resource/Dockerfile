FROM node:14
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn install && yarn cache clean
COPY . /usr/src/app
EXPOSE 3000
CMD [ "yarn", "webs" ]
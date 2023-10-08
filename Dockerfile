FROM node:alpine
LABEL author="hossein mousavi"
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install
COPY . /app
EXPOSE 4200
ENTRYPOINT ["yarn", "run", "docker"]

FROM node:14
ENV NODE_ENV=production

WORKDIR /scr/app

COPY [ "package*.json", "package-lock.json*", "./" ]

RUN npm install --production

COPY . .

EXPOSE 8081

CMD [ "node", "server.js" ]

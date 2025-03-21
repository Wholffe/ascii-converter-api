FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY src ./src

EXPOSE 3000

CMD ["node", "src/server.js"]

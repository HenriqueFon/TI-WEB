FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 3001
EXPOSE 8080

CMD ["sh", "-c", "npm run start:db & npm run start:auth & npm run start:front"]


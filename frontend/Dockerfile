FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN npm run build --prod



EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
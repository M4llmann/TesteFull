# Etapa de build
FROM node:20 as build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie os arquivos da aplicação para dentro do contêiner
COPY . .

# Exponha a porta 8080 para o servidor Angular
EXPOSE 8080

# Comando para rodar o servidor de desenvolvimento Angular
CMD ["npm", "run", "start"]
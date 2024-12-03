Baixe e instale o Docker Desktop no seu sistema:  
[Docker Desktop](https://www.docker.com/products/docker-desktop/)  

** Instalar o Node
Node.js e npm

O Angular CLI requer o Node.js. Certifique-se de instalar a versão LTS mais recente.
O npm (Node Package Manager) vem com o Node.js e é usado para instalar pacotes Angular.

Acesse https://nodejs.org/pt baixe e instale.

verificar instalação
node -v
npm -v

Ferramenta para criar e gerenciar projetos Angular.
npm install -g @angular/cli
verifique a instalação
ng version


### 2. **Clonar o Repositório**

   No terminal, execute o seguinte comando para clonar o repositório:

   git clone https://github.com/seu-usuario/app-bancario.git
   cd app-bancario




### 3. **Subir os Containers
No terminal, navegue até a pasta docker e execute:

   docker compose up

### 4. **Acessar Aplicação
### 4. **Acessar e Rodar o Front

Navegue até a pasta Frontend, dê o comando ng serve

Acesse o aplicativo no navegador pelo endereço:
http://localhost:4200

# 💻 Sobre o Projeto

Este **APP Bancário** foi construído com o intuito de **aprender e explorar tecnologias modernas!**  
Trata-se de uma **API de gestão bancária** desenvolvida em **Java Spring**, com banco de dados **PostgreSQL** e front-end em **Angular**.  
O projeto simula funcionalidades básicas de um banco, permitindo criar e gerenciar contas bancárias, realizar operações financeiras e consultar informações.

## 🚀 Funcionalidades

- **Criação de Conta Bancária**  
  Permite criar uma nova conta associada a um usuário específico.  
- **Consulta de Conta**  
  Recupera os detalhes de uma conta existente a partir do seu ID.  
- **Consulta de Saldo**  
  Permite verificar o saldo atual de uma conta.  
- **Depósitos e Saques**  
  - **Depósito**: Adiciona um valor ao saldo da conta.  
  - **Saque**: Deduz um valor do saldo da conta, desde que os fundos sejam suficientes.  
- **Visualização de Extrato**  
  Fornece uma lista de transações realizadas em uma conta específica, incluindo o tipo de transação (depósito ou saque), valor e data.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Java Spring  
- **Banco de Dados**: PostgreSQL  
- **Front-end**: Angular  
- **Containerização**: Docker 

## Guia de Instalação do Projeto Bancário

### 1. Baixar e Instalar o Docker Desktop

Primeiro, baixe e instale o Docker Desktop em seu sistema.

- **Link de download**: [Docker Desktop](https://www.docker.com/products/docker-desktop)

1. Acesse o link e baixe a versão compatível com seu sistema operacional (Windows ou Mac).
2. Siga as instruções de instalação fornecidas.

---
### 2. Instalar o Node.js e NPM

O Angular CLI requer o Node.js. Certifique-se de instalar a versão **LTS** mais recente. O **npm** (Node Package Manager) vem junto com o Node.js e é usado para instalar pacotes do Angular.

- **Link de download**: [Node.js](https://nodejs.org/pt-br/)

**Passos para instalação:**

1. Acesse o link e baixe a versão **LTS** do Node.js.
2. Siga as instruções para instalação.

Verificando a instalação:

No terminal, execute os seguintes comandos para verificar se o Node.js e npm estão instalados corretamente:

```
node -v
npm -v
```

Ferramenta para criar e gerenciar projetos Angular.
npm install -g @angular/cli
verifique a instalação
```
ng version
```

---
### 3. Instalar Git e Clonar o Repositório

Acesse o link https://git-scm.com/downloads e faça a instalação do Git, caso não tenha.

   Após a instalação, no terminal, execute o seguinte comando para clonar o repositório:

   No Terminal, navegue até a pasta onde deseja baixar o projeto:

```
cd/caminho/paraodiretorio/ex
```
E faça o comando para copiar o projeto.
  ```
git clone https://github.com/M4llmann/TesteFull.git
  ```


---
### 4. Subir os Containers

No terminal, navegue até a pasta docker e execute:

 ```
 docker compose up
```
   
---
### 5. Acessar e Rodar o Front

Navegue até a pasta Frontend, dê o comando ng serve

Acesse o aplicativo no navegador pelo endereço:
http://localhost:4200



---

## **Amostra**

![Amostra](https://github.com/user-attachments/assets/6e7e1554-68ac-4c1e-a8d0-6c33b6834a4b)



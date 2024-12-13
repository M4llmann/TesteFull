# 💻 Sobre o Projeto

Este **APP Bancário** foi construído com o intuito de **aprender e explorar tecnologias modernas!**  
Trata-se de uma **API de gestão bancária** simples, desenvolvida em **Java Spring**, com banco de dados **PostgreSQL** e front-end em **Angular**.  

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

### 2. Instalar Git e Clonar o Repositório

Acesse o link https://git-scm.com/downloads e faça a instalação do Git, caso não tenha.

   Após a instalação, no terminal, execute os seguintes comandos para clonar o repositório:

   Navegue até a pasta onde deseja baixar o projeto:

```
cd/caminho/paraodiretorio/ex
```
E faça o comando para copiar o projeto.
  ```
git clone https://github.com/M4llmann/TesteFull.git
  ```


---
### 3. Subir os Containers

No terminal, navegue até a pasta docker e execute:

 ```
 docker compose up db
```
```
docker compose down
```
```
docker compose up
```

Fazer desta forma para o banco não dar erro.
---
### 5. Acessar e Rodar o Front


Acesse o aplicativo no navegador pelo endereço:
http://localhost:4200



---

## **Amostra**

![Amostra](https://github.com/user-attachments/assets/6e7e1554-68ac-4c1e-a8d0-6c33b6834a4b)


---

## **Swagger**

Documentação de APIs: Usado Swagger para documentar os endpoints, incluindo descrições detalhadas dos parâmetros e exemplos de resposta.

basta acessar o link abaixo:

```
http://localhost:8080/api-docs

```
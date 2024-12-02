💻 Sobre o Projeto
Este APP Bancário foi construído com o intuito de aprender e explorar tecnologias modernas!
Trata-se de uma API de gestão bancária desenvolvida em Java Spring, com banco de dados PostgreSQL e front-end em Angular.
O projeto simula funcionalidades básicas de um banco, permitindo criar e gerenciar contas bancárias, realizar operações financeiras e consultar informações.

🚀 Funcionalidades
Criação de Conta Bancária
Permite criar uma nova conta associada a um usuário específico.
Consulta de Conta
Recupera os detalhes de uma conta existente a partir do seu ID.
Consulta de Saldo
Permite verificar o saldo atual de uma conta.
Depósitos e Saques
Depósito: Adiciona um valor ao saldo da conta.
Saque: Deduz um valor do saldo da conta, desde que os fundos sejam suficientes.
Visualização de Extrato
Fornece uma lista de transações realizadas em uma conta específica, incluindo o tipo de transação (depósito ou saque), valor e data.
🛠️ Tecnologias Utilizadas
Backend: Java Spring
Banco de Dados: PostgreSQL
Front-end: Angular
Containerização: Docker
▶️ Passos para Rodar o Projeto
1. Instalar o Docker
Baixe e instale o Docker Desktop no seu sistema:
Docker Desktop

2. Clonar o Repositório
Copie o projeto para a sua máquina local:

bash
Copiar código
git clone https://github.com/seu-usuario/app-bancario.git
cd app-bancario
3. Subir os Containers
No terminal, navegue até a pasta docker e execute:

bash
Copiar código
docker-compose up -d
4. Instalar o Node.js e Angular
Instale o Node.js: Node.js
Instale o Angular CLI:
bash
Copiar código
npm install -g @angular/cli
5. Iniciar o Frontend
Navegue até a pasta frontend e execute:

bash
Copiar código
ng serve
Acesse o aplicativo no navegador pelo endereço:
http://localhost:4200

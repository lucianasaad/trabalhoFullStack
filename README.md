# Projeto Full Stack – React + Spring Boot (Carros)

Projeto desenvolvido como trabalho da disciplina **Desenvolvimento Full Stack com React e Spring Boot**.

O objetivo do projeto é demonstrar, na prática, a construção de uma aplicação **full stack**, integrando frontend (React) e backend (Spring Boot), aplicando boas práticas de desenvolvimento, segurança, organização de código e documentação.

---

## 🧱 Arquitetura do Projeto

O projeto está organizado em duas camadas principais:

/apiCarros → Backend (Spring Boot)
/frontend → Frontend (React)


- O **backend** é responsável pela autenticação, regras de negócio e persistência de dados.
- O **frontend** consome a API REST, implementando autenticação JWT, CRUD e interface do usuário.

---

## 🚗 Domínio da Aplicação

A aplicação gerencia **carros**, permitindo:

- Autenticação de usuários (JWT)
- Listagem de carros
- Cadastro de novos carros
- Edição de carros existentes
- Exclusão de carros
- Logout seguro

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Java 17  
- Spring Boot  
- Spring Data JPA  
- Spring Security  
- JWT  
- Banco de dados H2 (em memória)  
- Maven  

### Frontend
- React  
- Vite  
- React Router DOM  
- Axios  
- JavaScript (ES6+)  
- HTML5 / CSS3  

---

## ▶️ Como executar o projeto localmente

### Backend

1. Acesse a pasta `apiCarros`
2. Execute a aplicação Spring Boot pela IDE (IntelliJ) ou via terminal
3. A API estará disponível em:
http://localhost:8080


---

### Frontend

1. Acesse a pasta `frontend`
cd frontend
Instale as dependências: npm install
Execute o projeto: npm run dev
A aplicação estará disponível em: http://localhost:5173

🔐 Autenticação e Segurança
A aplicação utiliza JWT (JSON Web Token) para autenticação e controle de acesso.

O login consome a API do backend e recebe um token JWT

O token é armazenado no localStorage

O token é enviado automaticamente nas requisições via interceptor do axios

Rotas protegidas exigem token válido

Em caso de erro 401 ou 403, o token é removido e o usuário é redirecionado para a tela de login com mensagem informativa

🔗 Integração Frontend ↔ Backend
Comunicação realizada via API REST

Endpoints centralizados em um arquivo de contrato

Configuração de proxy no Vite para evitar problemas de CORS em ambiente de desenvolvimento

Arquivos principais:

frontend/vite.config.js

frontend/src/services/api.js

frontend/src/services/endpoints.js

frontend/src/services/authService.js

frontend/src/services/carsService.js

📄 Funcionalidades Implementadas

 Login com autenticação JWT

 Proteção de rotas

 Listagem de carros (GET)

 Cadastro de carros (POST)

 Edição de carros (PUT)

 Exclusão de carros (DELETE)

 Logout seguro e centralizado

 Tratamento de sessão expirada (401/403)

 Tabela com barra de rolagem para grandes volumes de dados

📦 Controle de Versão
Projeto versionado com Git

Repositório público no GitHub

Utilização de .gitignore para exclusão de dependências e artefatos de build

Commits organizados por funcionalidade

📄 Documentação
O projeto possui documentação em formato PDF, contendo:

Descrição detalhada das etapas de desenvolvimento

Evidências (prints) das funcionalidades em execução

Referência direta aos arquivos de código responsáveis por cada funcionalidade

🚧 Status do Projeto:

 Passo 1 – Configuração e execução do backend

 Passo 2 – Exploração da API (Postman/Insomnia)

 Passo 3 – Estrutura inicial do frontend React

 Passo 4 – Integração real Frontend ↔ Backend (JWT + CRUD)

 Passo 5 – Segurança e melhorias (sessão expirada e logout)

 👩‍💻 Autora
Luciana Mara da Silva Saad
# Projeto Full Stack – React + Spring Boot (Carros)

Este projeto foi desenvolvido como trabalho da disciplina **Desenvolvimento Full Stack com React e Spring Boot**.

O objetivo é demonstrar, na prática, a integração entre frontend e backend utilizando uma API RESTful, aplicando boas práticas de desenvolvimento, organização de código e segurança.

---

## 🧱 Arquitetura do Projeto

O projeto é dividido em duas partes principais:

/backend → API REST desenvolvida em Spring Boot
/frontend → Aplicação frontend desenvolvida em React


- O **backend** é responsável pela regra de negócio, persistência de dados e segurança.
- O **frontend** é responsável pela interface do usuário e consumo da API.

---

## 🚗 Domínio da Aplicação

A aplicação gerencia **carros**, permitindo operações de:

- Autenticação de usuários
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
- Banco de dados H2 (memória)
- Maven

### Frontend
- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- HTML5 / CSS3

---

## ▶️ Como executar o projeto localmente

### Backend
1. Acesse a pasta `apiCarros`
2. Execute a aplicação Spring Boot (via IDE ou terminal)
3. A API estará disponível em:
    http://localhost:8080

### Frontend

1. Acesse a pasta `frontend`:
   ```bash
   cd frontend
2. Instale as dependências:
npm install

3. Execute o projeto:
npm run dev

4. A aplicação estará disponível em:
    http://localhost:5173


🔐 Autenticação

A aplicação utiliza autenticação baseada em JWT.

O token é obtido no login

O token é enviado nas requisições protegidas via header:

Authorization: Bearer <token>

📄 Documentação e Evidências

O projeto possui documentação detalhada em formato PDF, contendo:

Descrição das etapas de desenvolvimento

Prints das funcionalidades em execução

Referência direta aos trechos de código responsáveis por cada funcionalidade

📌 Status do Projeto

🚧 Em desenvolvimento

Até o momento foi concluído: 
- Configuração do backend
- Estrutura inicial do frontend
-  Mock de dados no frontend

Pendente:
- Integração real frontend/backend
-  Segurança completa com JWT

 👩‍💻 Autora: Luciana Mara da Silva Saad
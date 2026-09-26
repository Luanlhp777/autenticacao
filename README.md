# 🔐 Autenticação com JWT em Node.js e React

Projeto full stack desenvolvido para estudar um sistema completo de autenticação com **Node.js**, **Express**, **MySQL** e **React**.

A aplicação permite cadastrar usuários, proteger senhas com hash, realizar login, gerar tokens JWT, validar sessões e controlar o acesso a rotas privadas. O back-end utiliza uma organização inspirada no padrão MVC, com controllers, models, routes, middlewares e stored procedures.

## 🚀 Status do projeto

✅ Fluxo principal de autenticação concluído e funcionando.

O sistema já permite:

- cadastrar usuários;
- realizar login;
- gerar e armazenar o token JWT;
- validar e manter a sessão;
- acessar páginas e rotas protegidas;
- listar usuários;
- realizar logout;
- bloquear usuários sem autenticação.

## ✅ Funcionalidades concluídas

### Back-end

- [x] Servidor com Express;
- [x] Conexão com MySQL;
- [x] Cadastro e login de usuários;
- [x] Validação dos campos `usuario` e `senha`;
- [x] Verificação de usuário duplicado;
- [x] Hash de senhas com `bcryptjs`;
- [x] Geração e validação de token JWT;
- [x] Middleware de autenticação;
- [x] Rotas protegidas;
- [x] Consulta do usuário autenticado;
- [x] Tratamento de token ausente, inválido ou expirado;
- [x] Separação das consultas na camada `models`;
- [x] Model `usuario.model.js`;
- [x] Stored procedures no MySQL;
- [x] Integração do model com as procedures;
- [x] Configuração do CORS;
- [x] Testes com Thunder Client;
- [x] Proteção das variáveis de ambiente.

### Front-end

- [x] Projeto com React e Vite;
- [x] Página de cadastro;
- [x] Página de login;
- [x] Página de acesso autorizado;
- [x] Integração com a API;
- [x] Serviço centralizado em `api.js`;
- [x] Armazenamento do token no `localStorage`;
- [x] Validação automática da sessão;
- [x] Componente `ProtectedRoute`;
- [x] Redirecionamento de usuários não autenticados;
- [x] Persistência da autenticação;
- [x] Logout;
- [x] Mensagens de erro e sucesso;
- [x] Interface estilizada e responsiva;
- [x] Ícones com `lucide-react`.

## 📌 Próximas etapas

- [ ] Adicionar indicador de carregamento;
- [ ] Bloquear envios repetidos;
- [ ] Melhorar as validações;
- [ ] Adicionar confirmação de senha;
- [ ] Implementar recuperação de senha;
- [ ] Criar níveis de acesso;
- [ ] Adicionar testes automatizados;
- [ ] Criar `.env.example`;
- [ ] Publicar o front-end e o back-end.

## 🧱 Organização do back-end

- **Config:** conexão com o MySQL;
- **Models:** acesso ao banco e chamada das procedures;
- **Controllers:** regras de negócio e respostas HTTP;
- **Routes:** endpoints da API;
- **Middlewares:** validação do JWT;
- **Stored procedures:** busca, criação e listagem de usuários.

## 🗃️ Stored procedures

| Procedure | Responsabilidade |
| --- | --- |
| `sp_buscar_usuario` | Buscar um usuário pelo nome |
| `sp_criar_usuario` | Cadastrar um usuário com a senha em hash |
| `sp_listar_usuarios` | Listar usuários sem retornar a senha |

As procedures são chamadas pelo arquivo `usuario.model.js`, mantendo os comandos SQL separados dos controllers.

## 🛠️ Tecnologias

### Back-end

- Node.js;
- Express;
- MySQL e MySQL2;
- bcryptjs;
- JSON Web Token;
- dotenv;
- CORS;
- stored procedures.

### Front-end

- React;
- Vite;
- JavaScript;
- CSS;
- React Router;
- Lucide React;
- Fetch API;
- Local Storage.

### Ferramentas

- Visual Studio Code;
- Thunder Client;
- MySQL Workbench;
- Git e GitHub;
- NPM.

## 📁 Estrutura do projeto

```text
autenticacao/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   ├── middlewares/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   └── usuario.model.js
│   │   ├── routes/
│   │   │   └── authRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── database.sql
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Cadastro.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Sucesso.jsx
│   │   ├── routes/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

> As pastas `node_modules` existem apenas no ambiente local e não são enviadas ao GitHub.

## ⚙️ Como executar

### Banco de dados

Execute o arquivo `backend/database.sql` no MySQL Workbench. Ele deve criar o banco, a tabela `usuarios` e as stored procedures.

### Back-end

```bash
cd backend
npm install
npm run dev
```

Crie um arquivo `.env` dentro de `backend`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=autenticacao
JWT_SECRET=sua_chave_secreta
```

> O arquivo `.env` contém informações confidenciais e não deve ser enviado ao GitHub.

API disponível em:

```text
http://localhost:3000
```

### Front-end

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

## 🔗 Endpoints

| Método | Endpoint | Protegido | Descrição |
| --- | --- | --- | --- |
| `GET` | `/` | Não | Verificar o funcionamento da API |
| `POST` | `/usuarios` | Não | Cadastrar um usuário |
| `POST` | `/login` | Não | Autenticar e gerar um token |
| `GET` | `/usuarios` | Sim | Listar usuários |
| `GET` | `/auth/me` | Sim | Consultar o usuário autenticado |

### Cadastro

```http
POST /usuarios
```

```json
{
  "usuario": "Luan",
  "senha": "123456"
}
```

### Login

```http
POST /login
```

```json
{
  "usuario": "Luan",
  "senha": "123456"
}
```

Resposta:

```json
{
  "mensagem": "Login realizado com sucesso",
  "usuario": {
    "id": 1,
    "usuario": "Luan"
  },
  "token": "TOKEN_JWT"
}
```

### Rotas protegidas

Envie o token no cabeçalho:

```http
Authorization: Bearer TOKEN_JWT
```

## 📊 Status HTTP

- `200 OK`: requisição realizada com sucesso;
- `201 Created`: usuário cadastrado;
- `400 Bad Request`: dados inválidos ou ausentes;
- `401 Unauthorized`: credenciais ou token inválidos;
- `409 Conflict`: usuário já cadastrado;
- `500 Internal Server Error`: erro interno.

## 🔄 Fluxo de autenticação

1. O usuário envia o cadastro pelo front-end;
2. O controller valida os dados;
3. O `bcryptjs` transforma a senha em hash;
4. O model chama a procedure de cadastro;
5. A procedure grava o usuário no MySQL;
6. No login, o model busca o usuário por meio de uma procedure;
7. A senha é comparada com o hash armazenado;
8. A API gera o token JWT;
9. O front-end armazena o token no `localStorage`;
10. O middleware valida o token;
11. O `ProtectedRoute` libera ou bloqueia a página;
12. No logout, o token é removido.

## 🛡️ Segurança

- Senhas armazenadas somente como hash;
- consultas parametrizadas;
- senha e hash não retornados pela API;
- credenciais e chave JWT mantidas no `.env`;
- rotas privadas protegidas por token;
- tokens ausentes, inválidos ou expirados recusados;
- sessão validada ao iniciar a aplicação.

## 📚 Aprendizados

- API REST com Express;
- organização do back-end em camadas;
- models e stored procedures;
- integração com MySQL;
- hash de senhas;
- autenticação JWT;
- middlewares;
- integração entre React e Node.js;
- consumo de API com `fetch`;
- React Router e rotas protegidas;
- persistência com `localStorage`;
- Git e GitHub.

## 👨‍💻 Autor

Desenvolvido por **Luan Araujo** como projeto de estudos em desenvolvimento full stack com Node.js, React, MySQL e autenticação JWT.

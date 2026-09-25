# 🔐 Autenticação com JWT em Node.js e React

Projeto full stack desenvolvido para estudar a implementação de um sistema completo de autenticação utilizando **Node.js**, **Express**, **MySQL** e **React**.

A aplicação permite cadastrar usuários, armazenar senhas protegidas com hash, realizar login, gerar tokens JWT, validar sessões e controlar o acesso a páginas e rotas protegidas.

## 🚀 Status do projeto

✅ Fluxo principal de autenticação concluído e funcionando.

O sistema já permite:

- cadastrar usuários;
- realizar login;
- gerar e armazenar o token JWT;
- validar a sessão do usuário;
- acessar uma página protegida;
- permanecer autenticado após atualizar a página;
- realizar logout;
- bloquear usuários sem autenticação.

## ✅ Funcionalidades concluídas

### Back-end

- [x] Configuração inicial do servidor com Express;
- [x] Conexão do Node.js com o MySQL;
- [x] Cadastro de usuários;
- [x] Validação dos campos `usuario` e `senha`;
- [x] Validação do tamanho mínimo da senha;
- [x] Verificação de usuário já cadastrado;
- [x] Proteção das senhas com `bcryptjs`;
- [x] Login com validação de usuário e senha;
- [x] Comparação da senha informada com o hash armazenado;
- [x] Geração de token JWT;
- [x] Middleware de autenticação;
- [x] Listagem de usuários em rota protegida;
- [x] Rota para consultar o usuário autenticado;
- [x] Tratamento de token ausente, inválido ou expirado;
- [x] Testes das rotas com Thunder Client;
- [x] Configuração do CORS;
- [x] Proteção das variáveis de ambiente com `.gitignore`.

### Front-end

- [x] Criação do projeto com React e Vite;
- [x] Configuração do React Router;
- [x] Página de cadastro;
- [x] Página de login;
- [x] Página de acesso autorizado;
- [x] Integração do cadastro com a API;
- [x] Integração do login com a API;
- [x] Serviço centralizado para comunicação com o back-end;
- [x] Armazenamento do token JWT no `localStorage`;
- [x] Armazenamento dos dados do usuário autenticado;
- [x] Validação automática da sessão;
- [x] Componente para proteção de rotas;
- [x] Redirecionamento de usuários não autenticados;
- [x] Persistência da autenticação após atualizar a página;
- [x] Implementação de logout;
- [x] Exibição de mensagens de erro e sucesso;
- [x] Estilização das páginas;
- [x] Interface responsiva;
- [x] Ícones com `lucide-react`.

## 📌 Próximas etapas

- [ ] Adicionar indicador de carregamento nos formulários;
- [ ] Bloquear envios repetidos durante as requisições;
- [ ] Melhorar as validações dos campos;
- [ ] Adicionar confirmação de senha no cadastro;
- [ ] Implementar recuperação de senha;
- [ ] Criar níveis de acesso para usuários;
- [ ] Adicionar testes automatizados;
- [ ] Criar um arquivo `.env.example`;
- [ ] Preparar o projeto para publicação;
- [ ] Publicar o front-end e o back-end.

## 🛠️ Tecnologias utilizadas

### Back-end

- Node.js;
- Express;
- MySQL;
- MySQL2;
- bcryptjs;
- JSON Web Token;
- dotenv;
- CORS.

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
- Git;
- GitHub;
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

> As pastas `node_modules` fazem parte do ambiente local, mas não são enviadas ao GitHub.

## ⚙️ Como executar o projeto

### Pré-requisitos

Antes de começar, tenha instalado:

- Node.js;
- NPM;
- MySQL;
- Git.

## 🗄️ Configurando o banco de dados

Execute o arquivo `backend/database.sql` no MySQL para criar o banco e a tabela de usuários.

Exemplo de estrutura utilizada:

```sql
CREATE DATABASE IF NOT EXISTS autenticacao;

USE autenticacao;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## ▶️ Executando o back-end

### 1. Acesse a pasta do back-end

```bash
cd backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `backend`:

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

### 4. Inicie o servidor

```bash
npm run dev
```

Quando a conexão estiver funcionando, o terminal deverá exibir:

```text
MySQL conectado com sucesso.
Servidor rodando em http://localhost:3000
```

A API estará disponível em:

```text
http://localhost:3000
```

## 💻 Executando o front-end

Abra outro terminal e acesse a pasta do front-end:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

A aplicação estará disponível, por padrão, em:

```text
http://localhost:5173
```

> O back-end e o front-end precisam permanecer em execução simultaneamente.

## 🔗 Endpoints implementados

### Verificar o funcionamento da API

```http
GET /
```

Resposta esperada:

```json
{
  "mensagem": "API de autenticação funcionando."
}
```

---

### Cadastrar usuário

```http
POST /usuarios
```

Exemplo de corpo da requisição:

```json
{
  "usuario": "Luan",
  "senha": "123456"
}
```

Resposta esperada:

```json
{
  "mensagem": "Usuário cadastrado com sucesso.",
  "usuario": {
    "id": 1,
    "usuario": "Luan"
  }
}
```

#### Possíveis respostas do cadastro

Campos obrigatórios não informados:

```json
{
  "mensagem": "Usuário e senha são obrigatórios"
}
```

Senha muito curta:

```json
{
  "mensagem": "A senha deve ter pelo menos 4 caracteres"
}
```

Usuário já cadastrado:

```json
{
  "mensagem": "Usuário já cadastrado"
}
```

---

### Realizar login

```http
POST /login
```

Exemplo de corpo da requisição:

```json
{
  "usuario": "Luan",
  "senha": "123456"
}
```

Resposta esperada:

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

Se o usuário ou a senha estiverem incorretos:

```json
{
  "mensagem": "Usuário ou senha inválidos"
}
```

---

### Listar usuários

```http
GET /usuarios
```

Essa rota é protegida e exige um token JWT válido.

O token deve ser enviado no cabeçalho:

```http
Authorization: Bearer TOKEN_JWT
```

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "usuario": "Luan",
    "criado_em": "2026-09-13T22:00:49.000Z"
  },
  {
    "id": 2,
    "usuario": "Maria",
    "criado_em": "2026-09-13T22:01:19.000Z"
  }
]
```

A senha e o hash da senha não são retornados pela API.

---

### Consultar usuário autenticado

```http
GET /auth/me
```

Essa rota valida o token JWT e retorna os dados contidos no usuário autenticado.

O token deve ser enviado no cabeçalho:

```http
Authorization: Bearer TOKEN_JWT
```

Exemplo de resposta:

```json
{
  "usuario": {
    "id": 1,
    "usuario": "Luan",
    "iat": 1790300000,
    "exp": 1790307200
  }
}
```

Os campos `iat` e `exp` são adicionados automaticamente pelo JWT:

- `iat`: momento em que o token foi gerado;
- `exp`: momento em que o token irá expirar.

## ⚠️ Possíveis respostas da autenticação

Token não informado:

```json
{
  "mensagem": "Token não informado"
}
```

Token inválido ou expirado:

```json
{
  "mensagem": "Token inválido ou expirado"
}
```

## 📊 Status HTTP utilizados

- `200 OK`: requisição realizada com sucesso;
- `201 Created`: usuário cadastrado com sucesso;
- `400 Bad Request`: dados obrigatórios não informados;
- `401 Unauthorized`: credenciais ou token inválidos;
- `409 Conflict`: usuário já cadastrado;
- `500 Internal Server Error`: erro interno da aplicação.

## 🔄 Fluxo de autenticação

1. O usuário realiza o cadastro pelo front-end;
2. O front-end envia os dados para a API;
3. O back-end valida os campos recebidos;
4. A senha é transformada em hash pelo `bcryptjs`;
5. O usuário e o hash são armazenados no MySQL;
6. O usuário realiza o login;
7. A senha informada é comparada com o hash armazenado;
8. A API gera um token JWT;
9. O front-end armazena o token no `localStorage`;
10. O token é enviado para a rota `/auth/me`;
11. O middleware verifica a assinatura e a validade do token;
12. O componente `ProtectedRoute` libera ou bloqueia o acesso;
13. O usuário autenticado acessa a página de sucesso;
14. Ao realizar logout, o token é removido e o usuário retorna ao login.

## 🛡️ Segurança

- As senhas não são armazenadas em texto puro;
- O `bcryptjs` gera o hash antes da gravação no banco;
- A senha e o hash não são retornados pela API;
- As credenciais do banco ficam armazenadas no arquivo `.env`;
- A chave secreta do JWT fica armazenada no arquivo `.env`;
- O `.env` e as pastas `node_modules` são ignorados pelo Git;
- Rotas privadas exigem um token JWT válido;
- Tokens ausentes, inválidos ou expirados são recusados;
- O front-end valida a sessão ao iniciar a aplicação;
- Usuários não autenticados são redirecionados para o login.

## 📚 Aprendizados do projeto

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- criação de uma API REST com Express;
- conexão e consultas com MySQL;
- hash e comparação de senhas;
- autenticação baseada em JWT;
- criação de middleware;
- integração entre React e Node.js;
- consumo de API com `fetch`;
- gerenciamento de estado no React;
- navegação com React Router;
- persistência de dados com `localStorage`;
- proteção de rotas no front-end;
- tratamento de erros no front-end e no back-end;
- versionamento de código com Git e GitHub.

## 👨‍💻 Autor

Desenvolvido por **Luan Araujo** como projeto de estudos em desenvolvimento full stack, utilizando Node.js, React, MySQL e autenticação JWT.
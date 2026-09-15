# Autenticação com JWT em Node.js e React

Projeto de estudo para implementar um sistema completo de autenticação utilizando Node.js, Express, MySQL e React.

A aplicação conta com cadastro e login de usuários, proteção de senhas com hash, geração de token JWT, rotas privadas no back-end e páginas protegidas no front-end.

## Status do projeto

🚧 Projeto em desenvolvimento.

O back-end da autenticação está funcionando e a estrutura inicial do front-end já foi criada.

## Funcionalidades concluídas

### Back-end

- [x] Configuração inicial do servidor;
- [x] Conexão do Node.js com o MySQL;
- [x] Cadastro de usuários;
- [x] Validação dos campos `usuario` e `senha`;
- [x] Verificação de usuário já cadastrado;
- [x] Proteção das senhas com `bcryptjs`;
- [x] Login com validação de usuário e senha;
- [x] Comparação da senha com o hash armazenado;
- [x] Geração de token JWT;
- [x] Middleware de autenticação;
- [x] Listagem de usuários em rota protegida;
- [x] Rota para consultar o usuário autenticado;
- [x] Tratamento de token ausente, inválido ou expirado;
- [x] Testes das rotas pelo Thunder Client;
- [x] Proteção das variáveis de ambiente com `.gitignore`.

### Front-end

- [x] Criação do projeto com React;
- [x] Estrutura inicial de páginas;
- [x] Página de cadastro;
- [x] Página de login;
- [x] Página de sucesso;
- [x] Serviço para comunicação com a API;
- [x] Componente para proteção de rotas;
- [ ] Finalização da integração com o back-end;
- [ ] Testes completos do fluxo de autenticação;
- [ ] Estilização e responsividade das páginas.

## Próximas etapas

- [ ] Finalizar a integração das páginas com a API;
- [ ] Armazenar o token JWT após o login;
- [ ] Validar a sessão utilizando a rota `/auth/me`;
- [ ] Redirecionar usuários não autenticados;
- [ ] Implementar logout;
- [ ] Exibir mensagens de erro e sucesso;
- [ ] Melhorar as validações dos formulários;
- [ ] Estilizar as páginas;
- [ ] Tornar a interface responsiva;
- [ ] Preparar o projeto para publicação.

## Tecnologias utilizadas

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
- JavaScript;
- CSS;
- React Router;
- API REST.

### Ferramentas

- Visual Studio Code;
- Thunder Client;
- Git;
- GitHub;
- MySQL Workbench.

## Estrutura atual

```text
autenticacao/
├── backend/
│   ├── node_modules/
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
│   ├── node_modules/
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
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

> As pastas `node_modules` aparecem na estrutura local, mas não são enviadas para o GitHub.

## Como executar o projeto

### Pré-requisitos

Antes de começar, tenha instalado:

- Node.js;
- NPM;
- MySQL;
- Git.

## Executando o back-end

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

DB_HOST=seu_host
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=autenticacao

JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1h
```

> O arquivo `.env` contém informações confidenciais e não deve ser enviado ao GitHub.

### 4. Prepare o banco de dados

Execute o arquivo `database.sql` no MySQL antes de iniciar a API.

### 5. Inicie o servidor

```bash
npm run dev
```

Quando a conexão estiver funcionando, o terminal deverá exibir mensagens semelhantes a:

```text
MySQL conectado com sucesso.
Servidor rodando em http://localhost:3000
```

## Executando o front-end

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

O terminal mostrará o endereço local utilizado para acessar a aplicação no navegador.

## Endpoints implementados

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
  "usuario": "alice",
  "senha": "123456"
}
```

Resposta esperada:

```json
{
  "mensagem": "Login realizado com sucesso",
  "usuario": {
    "id": 3,
    "usuario": "alice"
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
    "usuario": "luan",
    "criado_em": "2026-09-13T22:00:49.000Z"
  },
  {
    "id": 2,
    "usuario": "maria",
    "criado_em": "2026-09-13T22:01:19.000Z"
  }
]
```

A senha e o hash da senha não são retornados na listagem.

---

### Consultar usuário autenticado

```http
GET /auth/me
```

Essa rota verifica o token JWT e retorna os dados do usuário autenticado.

O token deve ser enviado no cabeçalho:

```http
Authorization: Bearer TOKEN_JWT
```

Exemplo de resposta:

```json
{
  "mensagem": "Usuário autenticado",
  "usuario": {
    "id": 3,
    "usuario": "alice"
  }
}
```

## Possíveis respostas da autenticação

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

## Status HTTP utilizados

- `200 OK`: requisição realizada com sucesso;
- `201 Created`: usuário cadastrado com sucesso;
- `400 Bad Request`: dados obrigatórios não informados;
- `401 Unauthorized`: credenciais inválidas ou problema com o token;
- `409 Conflict`: usuário já cadastrado;
- `500 Internal Server Error`: erro interno da aplicação.

## Fluxo de autenticação

1. O usuário realiza o cadastro pelo front-end;
2. O back-end recebe os dados do cadastro;
3. A senha é transformada em hash pelo `bcryptjs`;
4. O usuário realiza o login;
5. A senha informada é comparada com o hash armazenado;
6. A API gera um token JWT;
7. O front-end armazena o token;
8. O token é enviado nas requisições para rotas protegidas;
9. O middleware verifica a validade do token;
10. A API permite ou bloqueia o acesso à rota solicitada.

## Segurança

- As senhas não são armazenadas em texto puro;
- O `bcryptjs` gera o hash da senha antes da gravação no banco;
- A senha não é retornada pela API;
- As credenciais do banco ficam armazenadas no arquivo `.env`;
- A chave secreta do JWT fica armazenada no arquivo `.env`;
- O `.env` e as pastas `node_modules` são ignorados pelo Git;
- Rotas privadas exigem um token JWT válido;
- Tokens ausentes, inválidos ou expirados são recusados pela API.

## Autor

Desenvolvido por **Luan Araujo** como projeto de estudos em Node.js, React, MySQL e autenticação JWT.
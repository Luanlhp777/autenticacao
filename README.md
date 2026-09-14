# Autenticação com JWT em Node.js

Projeto de estudo para implementar um sistema de autenticação utilizando Node.js, Express e MySQL.

A aplicação possui cadastro e login de usuários, proteção de senhas com hash, geração de token JWT e controle de acesso a rotas protegidas.

## Status do projeto

🚧 Projeto em desenvolvimento.

### Funcionalidades concluídas

- [x] Configuração inicial do back-end;
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
- [x] Tratamento de token ausente, inválido ou expirado;
- [x] Testes das rotas pelo Thunder Client;
- [x] Proteção das variáveis de ambiente com `.gitignore`.

### Próximas etapas

- [ ] Melhorar as validações dos dados;
- [ ] Criar níveis de acesso para usuários;
- [ ] Criar outras rotas protegidas;
- [ ] Implementar logout no front-end;
- [ ] Integrar o back-end com o front-end;
- [ ] Preparar o projeto para publicação.

## Tecnologias utilizadas

- Node.js;
- Express;
- MySQL;
- MySQL2;
- bcryptjs;
- JSON Web Token;
- dotenv;
- CORS;
- Thunder Client.

## Estrutura atual

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
│   ├── .gitignore
│   ├── database.sql
│   ├── package.json
│   └── package-lock.json
├── frontend/
└── README.md
```

## Como executar o projeto

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

## Endpoints implementados

### Verificar funcionamento da API

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

O token deve ser enviado no cabeçalho da requisição:

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

#### Possíveis respostas da autenticação

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

Possíveis status HTTP:

- `200 OK`: requisição realizada com sucesso;
- `400 Bad Request`: dados obrigatórios não informados;
- `401 Unauthorized`: credenciais inválidas ou problema com o token;
- `409 Conflict`: usuário já cadastrado;
- `500 Internal Server Error`: erro interno da aplicação.

## Fluxo de autenticação

1. O usuário realiza o cadastro;
2. A senha é transformada em hash pelo `bcryptjs`;
3. O usuário realiza o login;
4. A senha informada é comparada com o hash armazenado;
5. A API gera um token JWT;
6. O cliente envia o token no cabeçalho das rotas protegidas;
7. O middleware verifica a validade do token;
8. A API permite ou bloqueia o acesso à rota solicitada.

## Segurança

- As senhas não são armazenadas em texto puro;
- O `bcryptjs` gera o hash da senha antes da gravação no banco;
- A senha não é retornada pela API;
- As credenciais do banco ficam armazenadas no arquivo `.env`;
- A chave secreta do JWT fica armazenada no arquivo `.env`;
- O `.env` e a pasta `node_modules` são ignorados pelo Git;
- Rotas privadas exigem um token JWT válido;
- Tokens ausentes, inválidos ou expirados são recusados pela API.

## Autor

Desenvolvido por **Luan Araujo** como projeto de estudos em Node.js, MySQL e autenticação JWT.
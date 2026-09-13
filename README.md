# Autenticação com JWT em Node.js

Projeto de estudo para implementar um sistema de autenticação utilizando Node.js, Express e MySQL.

A aplicação contará com cadastro e login de usuários, senhas protegidas com hash, geração de token JWT e rotas privadas.

## Status do projeto

🚧 Projeto em desenvolvimento.

### Funcionalidades concluídas

- [x] Configuração inicial do back-end;
- [x] Conexão do Node.js com o MySQL;
- [x] Cadastro de usuários;
- [x] Validação dos campos `usuario` e `senha`;
- [x] Verificação de usuário já cadastrado;
- [x] Proteção das senhas com `bcryptjs`;
- [x] Teste da rota de cadastro pelo Thunder Client;
- [x] Proteção das variáveis de ambiente com `.gitignore`.

### Próximas etapas

- [ ] Criar a rota de login;
- [ ] Comparar a senha informada com o hash armazenado;
- [ ] Gerar o token JWT;
- [ ] Criar o middleware de autenticação;
- [ ] Implementar rotas protegidas;
- [ ] Integrar o back-end com o front-end.

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
│   │   ├── routes/
│   │   │   └── authRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── .gitignore
│   ├── database.sql
│   ├── package.json
│   └── package-lock.json
└── frontend/
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

### Cadastrar usuário

```http
POST /usuarios
```

Exemplo de corpo JSON:

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

### Possíveis respostas

#### Campos obrigatórios não informados

```json
{
  "mensagem": "Usuário e senha são obrigatórios"
}
```

#### Senha muito curta

```json
{
  "mensagem": "A senha deve ter pelo menos 4 caracteres"
}
```

#### Usuário já cadastrado

```json
{
  "mensagem": "Usuário já cadastrado"
}
```

## Segurança

- As senhas não são armazenadas em texto puro;
- O `bcryptjs` gera o hash da senha antes da gravação no banco;
- As credenciais do banco ficam armazenadas no arquivo `.env`;
- A futura chave secreta do JWT também ficará no `.env`;
- O `.env` e a pasta `node_modules` são ignorados pelo Git.

## Autor

Desenvolvido por **Luan Araujo** como projeto de estudos em Node.js, MySQL e autenticação JWT.
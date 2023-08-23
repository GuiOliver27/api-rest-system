# API Rest

## 📖  Descrição

Este repositório contém uma aplicação de exemplo construída usando o framework Express.js.
A aplicação é dividida em várias rotas que lidam com produtos e pedidos.
Ela serve como uma introdução simples para criação de aplicativos web com Express.js.


## 🛠️ Rotas
### Produtos
- GET /produtos: Retorna todos os produtos.
- POST /produtos: Insere um novo produto.
- GET /produtos/:id_produto: Retorna detalhes de um produto específico com base no id_produto.
- PATCH /produtos: Atualiza o produto.
- DELETE /produtos: Exclui o produto.

### Pedidos
- GET /pedidos: Retorna todos os pedidos.
- POST /pedidos: Cria um novo pedido.
- GET /pedidos/:id_pedido: Retorna detalhes de um pedido específico com base no id_pedido.
- PATCH /pedidos: Atualiza o pedido.
- DELETE /pedidos: Exclui o pedido.

<br/>

## Executando Localmente

Clone o projeto

```bash
  git init
  git@github.com:GuiOliver27/api-rest-system.git
```

Entre no diretório do projeto

```bash
  cd api-rest-system
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

Versão do Node

```bash
  v18.16.0
```

## Contribuições

Contribuições são bem-vindas! Se você encontrar problemas,
bugs ou quiser melhorar esta aplicação de exemplo, sinta-se à vontade para criar o pull request ou abrir uma issue.

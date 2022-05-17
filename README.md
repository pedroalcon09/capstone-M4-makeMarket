# CAPSTONE-M4 --> MakeMarket

Projeto de final do módulo 4 do curso Full-Stack da Kenzie Academy Brasil

## Dependências -D:

> typescript

> ts-node-dev

> @types/express

> @types/node

## Dependências -d:

> express

> typeorm

> reflect-metadata

> pg

> dotenv

> express-async-errors

## Dependencias de teste -D:

> jest@27.5.1

> ts-jest

> @types/jest

> supertest

> @types/supertest

> sqlite3

### TRELLO :

> https://trello.com/invite/capstonem43/e2e37af4f23f2dc1683f012969f51e10

### Repositório :

> https://github.com/pedroalcon09/capstone-M4-makeMarket

# DOCUMENTAÇÃO API

## 1 VENDEDOR (Seller):

### 1.1 - OBJETO:

| CAMPO      | TIPO   | DESCRIÇÃO                                            |
| ---------- | ------ | ---------------------------------------------------- |
| ID         | string | Id do vendedor gerada pelo uuid                      |
| name       | string | Nome do vendedor                                     |
| email      | string | email do vendedor                                    |
| paswword   | string | senha do vendedor                                    |
| totalSales | number | Total de vendas de um vendedor                       |
| grade      | number | Nota do vendedor(Média de todas com 2 decimais)      |
| created_at | date   | Data e horario do momento da criação do perfil       |
| updated_at | date   | Data e horário da última atualização de perfil feita |

### 1.2 - ENDPOINTS:

| Método | Rota              | Descrição                          |
| ------ | ----------------- | ---------------------------------- |
| POST   | /seller           | Cadastro de um novo vendedor       |
| GET    | /seller           | Listagem de todos os vendedores    |
| GET    | /seller/:sellerId | Listagem de um vendedor específico |
| PATCH  | /seller/:sellerId | Atualização de dados do vendedor   |
| DELETE | /seller/:sellerId | Deletar perfil do vendedor         |

#### CRIAÇÃO DE VENDEDOR

> Rota:

    /seller

> Exemplo de request:

    POST /seller
    Content-type: application/json

> Corpo da requisição:

    {
        "name": "John Doe",
        "email": "johnDoe@email.com",
        "password": "Aa12@abc",
    }

> Schema de validação do yup:

- name - string, length > 0;
- email - email;
- password - maior q 8, numero, caracter especial, maiuscula e minuscula;

> Exemplo de response:

    {
        "status": 201,
        "message": "Seller created!",
        "seller": {
        "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
        "name": "John Doe",
        "email": "johnDoe@email.com",
        "password": "hashedPassword",
        "totalSales": 0,
        "grade": 0,
        "created_at": "December 17, 2019 03:24:00",
        "updated_at": "December 17, 2019 03:24:00",
        },
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO            |
| -------------- | -------------------- |
| 409            | "Email already used" |

#### LISTAGEM DE VENDEDORES

> Rota:

    /seller

> Exemplo de request:

    GET /seller
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "sellers": [
            {
            "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
            "name": "John Doe",
            "email": "johnDoe@email.com",
            "totalSales": 0,
            "grade": 0,
            "created_at": "December 17, 2019 03:24:00",
            "updated_at": "December 17, 2019 03:24:00"
            },
            {
            "id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
            "name": "Janne Doe",
            "email": "janneDoe@email.com",
            "totalSales": 0,
            "grade": 0,
            "created_at": "April 30, 2019 03:24:00",
            "updated_at": "May 5, 2019 05:32:00"
            }],
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO        |
| -------------- | ---------------- |
| 404            | "No users found" |

#### LISTAGEM DE UM VENDEDOR

> Rota:

    /seller/:sellerId

> Exemplo de request:

    GET /seller/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "sellers":
            {
            "id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
            "name": "Janne Doe",
            "email": "janneDoe@email.com",
            "totalSales": 0,
            "grade": 0,
            "created_at": "April 30, 2019 03:24:00",
            "updated_at": "May 5, 2019 05:32:00"
            },
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                 |
| -------------- | ------------------------- |
| 403            | "No authorization header" |
| 403            | "Wrong or invalid token   |
| 404            | "No user with this ID"    |

#### ATUALIZAÇÃO DE VENDEDOR

> Rota:

    /seller/:sellerId

> Exemplo de request:

    PATCH /seller/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    {
        "name": "Janne Doe UPDATE",
        "email": "janneDoeUPDATE@email.com",
    }

> Schema de validação do yup:

name - optional, string, length > 0,
email - optional, email

> Exemplo de response:

    {
        "status": 200,
        "message": "Seller updated!",
        "sellers":
            {
            "id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
            "name": "Janne Doe UPDATE",
            "email": "janneDoeUPDATE@email.com",
            "totalSales": 0,
            "grade": 0,
            "created_at": "April 30, 2019 03:24:00",
            "updated_at": "July 9, 2020 10:42:00"
            }
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                     |
| -------------- | ----------------------------- |
| 403            | "No authorization header"     |
| 403            | "Wrong or invalid token       |
| 404            | "No user with this ID"        |
| 400            | "Body request empty"          |
| 403            | "You can only update yourself |

#### REMOÇÃO DE UM VENDEDOR

> Rota:

    /seller/:sellerId

> Exemplo de request:

    DELETE /seller/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "User deleted successfully"
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                     |
| -------------- | ----------------------------- |
| 403            | "No authorization header"     |
| 403            | "Wrong or invalid token       |
| 403            | "You can only delete yourself |
| 404            | "No user with this ID"        |

## 2 COMPRADOR (Buyer):

### 2.1 - OBJETO:

| CAMPO      | TIPO   | DESCRIÇÃO                                            |
| ---------- | ------ | ---------------------------------------------------- |
| ID         | string | Id do comprador gerada pelo uuid                     |
| name       | string | Nome do comprador                                    |
| email      | string | email do comprador                                   |
| password   | string | senha do comprador                                   |
| created_at | date   | Data e horario do momento da criação do perfil       |
| updated_at | date   | Data e horário da última atualização de perfil feita |

### 2.2 - ENDPOINTS:

| Método | Rota            | Descrição                           |
| ------ | --------------- | ----------------------------------- |
| POST   | /buyer          | Cadastro de um novo comprador       |
| GET    | /buyer          | Listagem de todos os compradores    |
| GET    | /buyer/:buyerId | Listagem de um comprador específico |
| PATCH  | /buyer/:buyerId | Atualização de dados do comprador   |
| DELETE | /buyer/:buyerId | Deletar perfil do comprador         |

#### CRIAÇÃO DE COMPRADOR

> Rota:

    /buyer

> Exemplo de request:

    POST /buyer
    Content-type: application/json

> Corpo da requisição:

    {
        "name": "Michael Scott",
        "email": "michael_scott@email.com",
        "password": "Aa12@abc",
    }

> Schema de validação do yup:

- name - string, length > 0;
- email - email;
- password - maior q 8, numero, caracter especial, maiuscula e minuscula;

> Exemplo de response:

    {
    "status": 201,
    "message": "Buyer created!",
    "buyer":
        {
            "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
            "name": "Michael Scott",
            "email": "michael_scott@email.com",
            "password": "hashedPassword",
            "created_at": "December 17, 2019 03:24:00",
            "updated_at": "December 17, 2019 03:24:00",
        },
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO            |
| -------------- | -------------------- |
| 409            | "Email already used" |

#### LISTAGEM DE COMPRADORES

> Rota:

    /buyer

> Exemplo de request:

    GET /buyer
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "buyers": [
            {
                "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
                "name": "Michael Scott",
                "email": "michael_scott@email.com",
                "created_at": "December 17, 2019 03:24:00",
                "updated_at": "December 17, 2019 03:24:00",
            },
            {
                "id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
                "name": "Dwight Schrute",
                "email": "dwigth@dundermifflin.com",
                "created_at": "April 30, 2019 03:24:00",
                "updated_at": "May 5, 2019 05:32:00"
            }],
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO        |
| -------------- | ---------------- |
| 404            | "No users found" |

#### LISTAGEM DE UM COMPRADOR

> Rota:

    /buy/:buyerId

> Exemplo de request:

    POST /buy/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
        "name": "Dwight Schrute",
        "email": "dwigth@dundermifflin.com",
        "created_at": "April 30, 2019 03:24:00",
        "updated_at": "May 5, 2019 05:32:00"
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                 |
| -------------- | ------------------------- |
| 403            | "No authorization header" |
| 403            | "Wrong or invalid token   |
| 404            | "No user with this ID"    |

#### ATUALIZAÇÃO DE COMPRADOR

> Rota:

    /buy/:buyerId

> Exemplo de request:

    POST /buy/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    {
        "name": "Dwight Schrute UPDATE",
        "email": "dwigthUPDATE@dundermifflin.com",
    }

> Schema de validação do yup:

- name - optional, string, length > 0,
- email - optional, email

> Exemplo de response:

    {
        "status": 200,
        "message": "Buyer updated!",
        "buyer":
            {
            "id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
            "name": "Dwight Schrute UPDATE",
            "email": "dwigthUPDATE@dundermifflin.com",
            "created_at": "April 30, 2019 03:24:00",
            "updated_at": "July 9, 2020 10:42:00"
            }
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                     |
| -------------- | ----------------------------- |
| 403            | "No authorization header"     |
| 403            | "Wrong or invalid token       |
| 404            | "No user with this ID"        |
| 400            | "Body request empty"          |
| 403            | "You can only update yourself |

#### REMOÇÃO DE UM COMPRADOR

> Rota:

    /buyer/:buyerId

> Exemplo de request:

    DELETE /buyer/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "User deleted successfully"
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                     |
| -------------- | ----------------------------- |
| 403            | "No authorization header"     |
| 403            | "Wrong or invalid token       |
| 403            | "You can only delete yourself |
| 404            | "No user with this ID"        |

## 3 PRODUTOS (Products):

### 3.1 - OBJETO:

| CAMPO       | TIPO    | DESCRIÇÃO                                            |
| ----------- | ------- | ---------------------------------------------------- |
| ID          | string  | Id do produto gerada pelo uuid                       |
| seller_id   | string  | Id do vendedor que gerou o produto                   |
| name        | string  | Nome do produto                                      |
| price       | decimal | Preço do produto                                     |
| description | string  | Descrição do produto                                 |
| stock       | number  | Quantidade de produtos em estoque                    |
| url_img     | string  | URL da imagem do produto                             |
| category_id | string  | Id da categoria a qual o produto pertence            |
| created_at  | date    | Data e horario do momento da criação do perfil       |
| updated_at  | date    | Data e horário da última atualização de perfil feita |

### 3.2 - ENDPOINTS:

| Método | Rota                          | Descrição                            |
| ------ | ----------------------------- | ------------------------------------ |
| POST   | /products/:sellerId           | Cadastro de um novo produto          |
| POST   | /products/favourites/:buyerId | Favoritar um produto                 |
| POST   | /products/buy/:buyerID        | Comprar um produto                   |
| GET    | /product                      | Listagem de todos os produtos        |
| GET    | /products/:categoryId         | Listagem de um produto por categoria |
| PATCH  | /products/:productId          | Atualização de dados do produto      |
| DELETE | /products/:productId          | Deletar produto                      |

#### CRIAÇÃO DE PRODUTO

> Rota:

    /products/:sellerId

> Exemplo de request:

    POST /products/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    {
        "name": "Cereal",
        "price": 12.50,
        "description": "Caixa de cereal sabor chocolate",
        "stock": 5,
        "url_img": "https://myimg.com.br",
        "category_id": "73hg83n-383bgv-27vh38vhu7"
    }

> Schema de validação do yup:

- name -- string, length > 0
- price -- decimal number, 2 decimal digits
- description -- string, length > 0,
- stock -- number , maior que zero
- url_img -- url,
- category_id -- string

> Exemplo de response:

    {
        "status": 201,
        "message": "Product created!",
        "product": {
            "id": "37fb3ifn-837383bf3-dsi2br8ndo-s72be",
            "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
            "name": "Cereal",
            "price": 12.50,
            "description": "Caixa de cereal sabor chocolate",
            "stock": 5,
            "url_img": "https://myimg.com.br",
            "category_id": "73hg83n-383bgv-27vh38vhu7"
            "created_at": "December 17, 2019 03:24:00",
            "updated_at": "December 17, 2019 03:24:00",
        },
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                 |
| -------------- | ------------------------- |
| 403            | "Wrong or invalid token"  |
| 403            | "No authorization header" |

#### LISTAGEM DE PRODUTOS

> Rota:

    /products

> Exemplo de request:

    GET /products
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "products": [
             {
                "id": "37fb3ifn-837383bf3-dsi2br8ndo-s72be",
                "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
                "name": "Cereal",
                "price": 12.50,
                "description": "Caixa de cereal sabor chocolate",
                "stock": 5,
                "url_img": "https://myimg.com.br",
                "category_id": "73hg83n-383bgv-27vh38vhu7"
                "created_at": "December 17, 2019 03:24:00",
                "updated_at": "December 17, 2019 03:24:00",
            },
            {
                "id": "7393hgfgif8-289vb38i2-cnfoles9-ornskw7",
                "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
                "name": "Caixa de leite",
                "price": 7.50,
                "description": "Caixa de leite semi desnatado",
                "stock": 15,
                "url_img": "https://myimg.com.br",
                "category_id": "8928gnd-28vbh49b-27vhb3if"
                "created_at": "December 17, 2019 03:24:00",
                "updated_at": "December 17, 2019 03:24:00",
            }],
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO           |
| -------------- | ------------------- |
| 404            | "No products found" |

#### LISTAGEM DE PRODUTOS POR CATEGORIAS

> Rota:

    /products/:categoryId

> Exemplo de request:

    GET /products/8928gnd-28vbh49b-27vhb3if
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    [{
        "id": "7393hgfgif8-289vb38i2-cnfoles9-ornskw7",
        "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
        "name": "Caixa de leite",
        "price": 7.50,
        "description": "Caixa de leite semi desnatado",
        "stock": 15,
        "url_img": "https://myimg.com.br",
        "category_id": "8928gnd-28vbh49b-27vhb3if"
        "created_at": "December 17, 2019 03:24:00",
        "updated_at": "December 17, 2019 03:24:00",
    },
    {
        "id": "jf0278vj-d82hckfh-27vtejfoiv-2372n9oej",
        "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
        "name": "Manteiga",
        "price": 4.25,
        "description": "Manteiga vigor",
        "stock": 13,
        "url_img": "https://myimg.com.br",
        "category_id": "8928gnd-28vbh49b-27vhb3if"
        "created_at": "December 17, 2019 03:24:00",
        "updated_at": "December 17, 2019 03:24:00",
    }]

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                  |
| -------------- | -------------------------- |
| 403            | "No authorization header"  |
| 403            | "Wrong or invalid token    |
| 404            | "No category with this ID" |

#### ATUALIZAÇÃO DE PRODUTO

> Rota:

    /products/:productId

> Exemplo de request:

    PATCH /products/jf0278vj-d82hckfh-27vtejfoiv-2372n9oej
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    {
        "name": "Manteiga NOVA",
        "price": 4.75,
        "description": "Manteiga vigor NOVA",
        "stock": 13,
    }

> Schema de validação do yup:

- name - optional, string, length > 0,
- price - optional, email
- description - optional, string
- stock - optional, number
- url_img - optional, URL
- category_id - optional, string

> Exemplo de response:

    {
        "status": 200,
        "message": "Product updated!",
        "sellers":
            {
                "id": "jf0278vj-d82hckfh-27vtejfoiv-2372n9oej",
                "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
                "name": "Manteiga NOVA",
                "price": 4.75,
                "description": "Manteiga vigor NOVA",
                "stock": 13,
                "url_img": "https://myimg.com.br",
                "category_id": "8928gnd-28vbh49b-27vhb3if"
                "created_at": "December 17, 2019 03:24:00",
                "updated_at": "December 17, 2019 03:24:00",
            }
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                                 |
| -------------- | ----------------------------------------- |
| 403            | "No authorization header"                 |
| 403            | "Wrong or invalid token                   |
| 403            | "Only the creator can update the product" |
| 404            | "No user with this ID"                    |
| 400            | "Body request empty"                      |
| 403            | "You can only update yourself             |

#### REMOÇÃO DE UM PRODUTO

> Rota:

    /products/:productId

> Exemplo de request:

    DELETE /products/jf0278vj-d82hckfh-27vtejfoiv-2372n9oej
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "Product deleted successfully"
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                          |
| -------------- | ---------------------------------- |
| 403            | "No authorization header"          |
| 403            | "Wrong or invalid token            |
| 403            | "You can only delete your products |
| 404            | "No product with this ID"          |

## 4 FAVORITOS (Favourites):

### 4.1 - OBJETO:

| CAMPO      | TIPO   | DESCRIÇÃO                             |
| ---------- | ------ | ------------------------------------- |
| ID         | string | Id da relação, gerada pelo uuid       |
| buyer_id   | string | Id do comprador q favoritou o produto |
| product_id | string | Id do prodcuto que vai ser favoritado |

### 4.2 - ENDPOINTS:

| Método | Rota                            | Descrição                                 |
| ------ | ------------------------------- | ----------------------------------------- |
| POST   | /favourites/:buyerID/:productId | Adicionar um produto aos favoritos        |
| DELETE | /favourites/:buyerID/:productId | Deletar produto dos favoritos             |
| GET    | /favourites/:buyerID            | listar produtos favoritos de um comprador |

#### FAVORITANDO PRODUTO

> Rota:

    /favourites/:buyerID/:productId

> Exemplo de request:

    POST /favourites/9cd739fj9-d724-72hd-jf72-hdi89304j294/37fb3ifn-837383bf3-dsi2br8ndo-s72be
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "Product added to favourites successfully"
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                       |
| -------------- | ------------------------------- |
| 404            | "No product with this ID found" |
| 404            | "No buyer with this ID found"   |
| 403            | "Wrong or invalid token"        |

#### REMOVENDO PRODUTO DOS FAVORITOS

> Rota:

    /favourites/:buyerID/:productId

> Exemplo de request:

    POST /favourites/9cd739fj9-d724-72hd-jf72-hdi89304j294/37fb3ifn-837383bf3-dsi2br8ndo-s72be
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "Product removed from favourites successfully"
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                       |
| -------------- | ------------------------------- |
| 404            | "No product with this ID found" |
| 404            | "No buyer with this ID found"   |
| 403            | "Wrong or invalid token"        |

#### LISTANDO FAVORITOS DE UM COMPRADOR

> Rota:

    /favourites/:buyerID

> Exemplo de request:

    POST /favourites/9cd739fj9-d724-72hd-jf72-hdi89304j294
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "favourites": [
            {
                "id": "jf0278vj-d82hckfh-27vtejfoiv-2372n9oej",
                "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
                "name": "Manteiga NOVA",
                "price": 4.75,
                "description": "Manteiga vigor NOVA",
                "stock": 13,
                "url_img": "https://myimg.com.br",
                "category_id": "8928gnd-28vbh49b-27vhb3if"
                "created_at": "December 17, 2019 03:24:00",
                "updated_at": "December 17, 2019 03:24:00",
            },
            {
                "id": "y3ovn39hng-893ehv893bhrvi-29gvhn39o3gu",
                "seller_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
                "name": "Pneu Novo",
                "price": 555.75,
                "description": "Pneu novo, embalado e com entrega",
                "stock": 13,
                "url_img": "https://myimg.com.br",
                "category_id": "8928gnd-28vbh49b-27vhb3if"
                "created_at": "December 17, 2019 03:24:00",
                "updated_at": "December 17, 2019 03:24:00",
            }
        ]
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                     |
| -------------- | ----------------------------- |
| 404            | "No products found"           |
| 404            | "No buyer with this ID found" |
| 403            | "Wrong or invalid token"      |

## 5 COMPRAS (Buys):

### 5.1 - OBJETO:

| CAMPO      | TIPO   | DESCRIÇÃO                                     |
| ---------- | ------ | --------------------------------------------- |
| ID         | string | Id da relação, gerada pelo uuid               |
| buyer_id   | string | Id do comprador q favoritou o produto         |
| product_id | string | Id do prodcuto que vai ser favoritado         |
| created_at | date   | Data da criação do produto                    |
| status     | string | Status da transação, pode ser NOT PAID e PAID |

### 5.2 - ENDPOINTS:

| Método | Rota                     | Descrição                           |
| ------ | ------------------------ | ----------------------------------- |
| POST   | /buy/:buyerID/:productId | Comprar um produto                  |
| DELETE | /buy/:buyId              | Deletar uma compra                  |
| PATCH  | /buy/:buyId/pay          | Pagar uma compra e efetuar feedback |

#### COMPRA DE UM PRODUTO

> Rota:

    /products/buy/:buyerID/:productId

> Exemplo de request:

    POST /buy/9cd739fj9-d724-72hd-jf72-hdi89304j294/37fb3ifn-837383bf3-dsi2br8ndo-s72be
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "Product bought successfully"
        "transaction": {
            "id": "0f63nfi-27vb2i8cb-82bf53i8-db2u7nei8",
            "product_id": "37fb3ifn-837383bf3-dsi2br8ndo-s72be",
            "buyer_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
            "created_at": "December 17, 2019 03:24:00",
            "status": "NOT PAID",
            "grade" : undefined,
            "feedback": ""
        },
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                            |
| -------------- | ------------------------------------ |
| 403            | "No authorization header"            |
| 403            | "Wrong or invalid token              |
| 404            | "No user with this ID"               |
| 404            | "No product with this ID"            |
| 404            | "The stock of this product is empty" |

#### PAGAMENTO DE UMA COMPRA

> Rota:

    buy/:buyId/pay

> Exemplo de request:

    PATCH /buy/0f63nfi-27vb2i8cb-82bf53i8-db2u7nei8/pay
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    {
        "grade": 4.8,
        "feedback": "Adorei o produto, só demorou um pouco pra chegar"
    }

> Schema de validação do yup:

- grade - obrigatório, number
- feeback - obrigatório, lenght > 15

> Exemplo de response:

    {
        "status": 200,
        "message": "Product paid successfully"
        "transaction": {
            "id": "0f63nfi-27vb2i8cb-82bf53i8-db2u7nei8",
            "product_id": "37fb3ifn-837383bf3-dsi2br8ndo-s72be",
            "buyer_id": "9cd739fj9-d724-72hd-jf72-hdi89304j294",
            "created_at": "December 17, 2019 03:24:00",
            "status": "PAID",
            "grade": 4.8,
            "feedback": "Adorei o produto, só demorou um pouco pra chegar"
        },
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                     |
| -------------- | ----------------------------- |
| 403            | "No authorization header"     |
| 403            | "Wrong or invalid token       |
| 404            | "No user with this ID"        |
| 404            | "No buy with this ID"         |
| 403            | "Feedback or grade are empty" |

#### CANCELAMENTO DE UMA COMPRA

> Rota:

    buy/:buyId

> Exemplo de request:

    DELETE /buy/0f63nfi-27vb2i8cb-82bf53i8-db2u7nei8/pay
    Authorization: token
    Content-type: application/json

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "Transaction deleted successfully"
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                       |
| -------------- | ------------------------------- |
| 403            | "No authorization header"       |
| 403            | "Wrong or invalid token         |
| 404            | "No user with this ID"          |
| 404            | "No buy with this ID"           |
| 403            | "You can only delete your buys" |

## 6 CATEGORIAS (Categories):

### 6.1 - OBJETO:

| CAMPO      | TIPO   | DESCRIÇÃO                     |
| ---------- | ------ | ----------------------------- |
| ID         | string | Id da categoria               |
| name       | string | Nome da categoria             |
| created_at | string | Data que categoria foi criada |

### 6.2 - ENDPOINTS:

| Método | Rota                    | Descrição             |
| ------ | ----------------------- | --------------------- |
| POST   | /categories/new         | Criar nova categoria  |
| DELETE | /categories/:categoryId | Deletar uma categoria |

#### CRIANDO NOVA CATEGORIA

> Rota:

    /categories/new

> Exemplo de request:

    POST /categories/new
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    {
        "name": "Laticinios"
    }

> Schema de validação do yup:

- name - obrigatório, string, length > 0

> Exemplo de response:

    {
        "status": 200,
        "message": "Category created",
        "category" : {
            "id": "36382igbfj-27ghenf-2738igbdjs",
            "name": "Laticinios",
            "created_at": "December 17, 2019 03:24:00"
        }
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                      |
| -------------- | ------------------------------ |
| 409            | "This category already exists" |
| 403            | "Wrong or invalid token"       |

#### LISTANDO CATEGORIAS

> Rota:

    /categories

> Exemplo de request:

    GET /categories
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "categories" : [
                {
            "id": "36382igbfj-27ghenf-2738igbdjs",
            "name": "Laticinios",
            "created_at": "December 17, 2019 03:24:00"
        },
        {
            "id": "6484933-vh383-v3-v783bvc8i3j3",
            "name": "Horti-Fruti",
            "created_at": "December 17, 2019 03:24:00"
        }
        ]
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                |
| -------------- | ------------------------ |
| 404            | "No categories created"  |
| 403            | "Wrong or invalid token" |

#### DELETANDO NOVA CATEGORIA

> Rota:

    /categories/:categoryId

> Exemplo de request:

    DELETE /categories/36382igbfj-27ghenf-2738igbdjs
    Content-type: application/json
    Authorization: token

> Corpo da requisição:

    NÃO HÁ

> Schema de validação do yup:

    NÃO HÁ

> Exemplo de response:

    {
        "status": 200,
        "message": "Category deleted",
    }

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO                  |
| -------------- | -------------------------- |
| 404            | "No category with this id" |
| 403            | "Wrong or invalid token"   |

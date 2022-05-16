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

> Rota: /seller

> Exemplo de request:

```
POST /seller
Content-type: application/json

```

> Corpo da requisição:

```
{
    "name": "John Doe",
    "email": "johnDoe@email.com",
    "password": "Aa12@abc"
}
```

> Schema de validação do yup:

```

```

> Exemplo de response:

```
{
    status: 201,
    seller: {
        "id": "9cda28c9-e540-4b2c-bf0c-c90006d37893",
        "name": "John Doe",
        "email": "johnDoe@email.com",
        "password": "hashedPassword",
        "totalSales": 0,
        "grade": 0,
        "created_at": "December 17, 2019 03:24:00",
        "updated_at": "December 17, 2019 03:24:00"
    }
}
```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO            |
| -------------- | -------------------- |
| 409            | "Email already used" |

#### LISTAGEM DE VENDEDORES

> Rota: /seller

> Exemplo de request:

```
GET /seller
Content-type: application/json

```

> Corpo da requisição:

```
NÃO HÁ

```

> Schema de validação do yup:

```
NÃO HÁ

```

> Exemplo de response:

```
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
    }
]

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO        |
| -------------- | ---------------- |
| 404            | "No users found" |

#### LISTAGEM DE UM VENDEDOR

> Rota:

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

#### ATUALIZAÇÃO DE VENDEDOR

> Rota:

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

#### REMOÇÃO DE UM VENDEDOR

> Rota:

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

## 2 COMPRADOR (Buyer):

### 2.1 - OBJETO:

| CAMPO      | TIPO   | DESCRIÇÃO                                            |
| ---------- | ------ | ---------------------------------------------------- |
| ID         | string | Id do comprador gerada pelo uuid                     |
| name       | string | Nome do comprador                                    |
| email      | string | email do comprador                                   |
| paswword   | string | senha do comprador                                   |
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

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

#### LISTAGEM DE COMPRADORES

> Rota:

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

#### LISTAGEM DE UM COMPRADOR

> Rota:

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

#### ATUALIZAÇÃO DE COMPRADOR

> Rota:

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

#### REMOÇÃO DE UM COMPRADOR

> Rota:

> Exemplo de request:

```

```

> Corpo da requisição:

```

```

> Schema de validação do yup:

```

```

> Exemplo de response:

```

```

> Possiveis erros:

| CÓDIGO DO ERRO | DESCRIÇÃO |
| -------------- | --------- |
|                |           |

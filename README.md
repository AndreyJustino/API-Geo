# API Geo

Nossa API fornece acesso a dados abrangentes sobre todos os estados brasileiros e continentes ao redor do mundo. Através dela, você pode obter informações detalhadas, organizadas da seguinte maneira:

Estados Brasileiros

Para cada estado do Brasil, a API oferece os seguintes dados:

    ID: Identificador único do estado
    Nome: Nome do estado
    Sigla: Abreviação do estado
    Capital: Capital do estado
    População: Número de habitantes do estado

Continentes

A API também disponibiliza dados sobre todos os continentes: África, Ásia, América do Norte, América do Sul, Europa e Oceania. Para cada continente, você pode acessar informações detalhadas sobre os países que o compõem, incluindo:

    ID: Identificador único do país
    Nome: Nome do país
    Presidente: Nome do presidente do país
    População: Número de habitantes do país
    Território: Extensão territorial do país

## Instalação
Execute o comando abaixo para instalar as dependencias

    npm install

## Rodar
Execute o comando abaixo para rodar a aplicação

    npm run start

## API Reference

#### Pegar todos os estados

```http
  GET /estado
```

#### Pegar estado por nome

```http
  GET /estadoNome/{nome}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Obrigatório**. Nome do estado sem acento |

#### Pegar estado por Id

```http
  GET /estadoId/{id}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Obrigatório**. Id do estado. Do 1 ao 27 |

#### Pegar continente por Nome

```http
  GET /continenteNome/{nome}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Obrigatório**. Nome do continente, Sem acentos |

#### Pegar país por Nome

```http
  GET /continentePais/{nome}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Obrigatório**. Nome do país. Sem acento |

#### Pegar bandeira de  um País pelo nome

```http
  GET /bandeira/{nome}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `nome`      | `string` | **Obrigatório**. Nome do país que se deseja ver a bandeira. Sem acento |
## Demo

https://api-geo.onrender.com
## Authors

- [@AndreyJustino](https://github.com/AndreyJustino)

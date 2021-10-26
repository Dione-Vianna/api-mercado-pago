# Integração com mercado pago

Para usar essa api siga os passos

- clone o projeto

```
git clone https://github.com/Dione-Vianna/api-mercado-pago.git
```

- instale as dependências

```
yarn install ou npm install
```

- precisa passar o sue token

  ### consegui-se esse token criando uma loja no mercado pago

```js
renomeie o arquivo .example.env para .env e adicione o token da loja
ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
```

- executar o projeto

```
yarn start
```

## existe quatro rotas no projeto

- create_preference, é para gerar um id para validar a transação

- failure, pending e success, vão ser chamada apos finalizar a transação se tudo correr bem success caso de erro failure e se o pagamento tiver pendente pending

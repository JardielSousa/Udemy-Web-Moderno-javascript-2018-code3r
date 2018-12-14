// Nov recurso do ES2015

const pessoa = {
  nome: "Maila",
  idade: 32,
  endereco: {
    logradouro: "Rua verde",
    numero: 5350
  }
}

const {nome, idade} = pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa
console.log(n, i);

const {sobrenome, bomhumor = true} = pessoa
console.log(sobrenome, bomhumor)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep);

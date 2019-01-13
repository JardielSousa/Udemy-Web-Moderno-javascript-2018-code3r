// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: "qualquer",
  preco: 1.99,
  tag:  "promoção"
})
console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar"
delete produto.tag

console.log(produto)

// Object.seal
const pessoa = {
  nome: "Pessoa 01",
  idade: 35
}

Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "Sobrenome pessoa"
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

// Object.freeze = selado + valores constantes


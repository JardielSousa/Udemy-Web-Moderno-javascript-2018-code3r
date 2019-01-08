function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto("Prod 01", 10))
console.log(criarProduto("Prod 02", 20))
console.log(criarProduto("Prod 03", 30))
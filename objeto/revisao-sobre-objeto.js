// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Genérica"
produto.preco = 222

console.log(produto)

delete produto.preco
delete produto["marca do produto"]
console.log(produto)


const carro = {
  modelo: "Fiesta",
  valor: 15000,
  proprietario: {
    nome: "Jardiel",
    idade: 36,
    endereco: {
      logradouro: "Rua Verde",
      numero: 5350
    }
  },
  condutores: [{
    nome: "C-01",
    idade: 18
  },{
    nome: "C-02",
    idade: 19
  }],
  calcularValorSeguro: function() {
    // ....
  }
}

console.log(carro)

carro.proprietario.endereco.numero = 1111
carro["proprietario"]["endereco"]["logradouro"] = "Rua nova"

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)






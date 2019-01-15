const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]
// Minha solução
const result = carrinho.map(JSON.parse).map((it) => it.preco)
console.log(result)

// Retornar um array apenas com os preços
const paraObjeto = (json) => JSON.parse(json)
const apenasPreco = (produto) => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
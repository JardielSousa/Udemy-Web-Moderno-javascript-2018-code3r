const pai = {
  nome: "Papai",
  corCabelo: "preto"
}

const filha1 = Object.create(pai)
filha1.nome = "Laila"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: {
    value: "Filha 02",
    writable: false,
    enumerable: true
  }
})

console.log(filha2.nome)
filha2.nome = "Filha 03"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}
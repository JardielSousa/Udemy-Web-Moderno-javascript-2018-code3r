const aprovados = ["Jardiel", "Laila", "Caroline", "Maila", "Cristina"]
aprovados.forEach(function(nome, indice) {
  console.log(`${indice+1}) ${nome}`)
})

console.log()
aprovados.forEach((nome) => console.log(nome))

console.log()
const exibir = (nome) => console.log(nome)
aprovados.forEach(exibir)
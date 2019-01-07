const notas = [3.4,4.5,5.6,6.7,7.8,8.9,9.1]

// Sem callback
let notasBaixas = []
let nota = 0
for (let i in notas) {
  nota = notas[i]
  if (nota < 7) {
    notasBaixas.push(nota)
  }
}
console.log(notasBaixas)

// Com callback
const notasBaixas_callback = notas.filter(function(nota) {
  return nota < 7
})
console.log(notasBaixas_callback)

const notasBaixas_arrow_callback = notas.filter((nota) => nota < 7)
console.log(notasBaixas_arrow_callback)
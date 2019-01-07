const fabricantes = ["Mercedes","Audi","BMW","Ford"]
function imprimir(nome, indice) {
  console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fab => console.log(fab))
// fabricantes.forEach((fab,b) => console.log(fab,b))


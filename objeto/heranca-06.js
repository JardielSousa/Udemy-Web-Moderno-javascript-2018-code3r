function Aula(nome, videoId) {
  this.nome = nome
  this.videoId = videoId
}

const aula1 = new Aula("Aula 01", 123)
const aula2 = new Aula("Aula 02", 234)

console.log(aula1, aula2)

// Simulando o new
function novo(f, ...params) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)

  return obj
}

const aula3 = novo(Aula, "Aula 03", 1234)
const aula4 = novo(Aula, "Aula 04", 4567)
console.log(aula3, aula4)
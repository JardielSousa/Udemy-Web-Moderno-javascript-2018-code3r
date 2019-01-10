const seguencia = {
  _valor: 1, // convenção de propriedade privada
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    this._valor = valor
  }
}

console.log(seguencia.valor, seguencia.valor)
seguencia.valor = 1000
console.log(seguencia.valor, seguencia.valor)
seguencia.valor = 900
console.log(seguencia.valor, seguencia.valor)
function Carro(velMax=200, delta=5) {
  // Atributo privado
  let velAtual = 0

  // Método público
  this.acelerar = function() {
    if(velAtual + delta <= velMax) {
      velAtual += delta
    } else {
      velAtual = velMax
    }
  }

  this.getVelocidadeAtual = function() {
    return velAtual
  }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

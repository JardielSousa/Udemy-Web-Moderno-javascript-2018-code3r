let dobro = function(a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // return implicito

console.log(dobro(20))

let ola = function () {
  return "Olá!"
}

ola = () => "Olá!"
ola = _ => "Olá!" // Possui um parâmetro

console.log(ola())
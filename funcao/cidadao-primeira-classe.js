// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function func1() { }

// Armazenar em uma variável
const func2 = function() { }

// Armazenar em um array
const array = [function(a,b) {return a+b}, func1, func2]
console.log(array[0](2,3))

// Aramazenar em um atributo de Objeto
const obj = {}
obj.falar = function() {return "Opa!"}
console.log(obj.falar())

// Passar função como parâmetro
function run(func) {
  func()
}
run(function(){console.log("Executado a funcao como parâmetro....")})

// Uma função pode retornar/conter outra função
function soma(a,b) {
  return function(c) {console.log(a+b+c)}
}

soma(2,3)(5)
const resultSoma = soma(6,5)
resultSoma(4)
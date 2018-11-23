// Armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)

// 
const soma = (a, b) => {
    return a+b
}

console.log(soma(10,3));

// retorno implícito
const subtracao = (a,b) => a-b

console.log(subtracao(11,1))

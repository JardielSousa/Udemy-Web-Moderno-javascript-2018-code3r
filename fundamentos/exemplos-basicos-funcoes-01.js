// Função sem retorno
function imprimirSoma(a, b) {
    return console.log(a+b);
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 7)
imprimirSoma()

// Função com retorno
console.log()
function soma(a, b=0) {
    return a+b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());
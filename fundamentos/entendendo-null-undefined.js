// Atribuição por referência
const a = {name: "Jardiel"}
console.log(a);

const b = a;
b.name = "Jardiel Sousa"

console.log(a);

// Atribuição por valor
console.log();
let c = 3;
let d = c;
d++
console.log("Variavel c: "+c);
console.log("Variavel d: "+d);

//
console.log();
let valor // não iniciada
console.log(valor);

valor = null // Ausẽncia de valor
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.55
console.log(produto);

produto.preco = undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);
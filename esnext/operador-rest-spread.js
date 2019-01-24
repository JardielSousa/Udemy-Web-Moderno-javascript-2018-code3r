// Operador .... rest(juntar) | spread(espalhar)
// Usar rest com parâmetros de função

// Usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// Usar spread com array
const grupoA = ["Jardiel", "Maila", "Laila"]
const grupoFinal = ["Sousa", ...grupoA, "Cristina"]
console.log(grupoFinal);
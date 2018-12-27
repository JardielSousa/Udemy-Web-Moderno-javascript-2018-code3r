const notas = [1.2,2.3,3.4,4.5,5.6,6.7,7.8,8.9,9.0]
for (let i in notas) {
  console.log(`Nota[${i}] => ${notas[i]}`)
}

const pessoa = {
  nome: "Jardiel",
  sobrenome: "Sousa",
  idade: 36,
  peso: 75
}

for(let propriedade in pessoa) {
  console.log(`${propriedade} = ${pessoa[propriedade]}`)
}
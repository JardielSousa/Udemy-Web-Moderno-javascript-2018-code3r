const laila = {
  nome: "Laila Caroline",
  idade: 2,
  peso: 12
}

console.log(Object.keys(laila))
console.log(Object.values(laila))
console.log(Object.entries(laila))

Object.entries(laila).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
});

Object.defineProperty(laila, "nascimento", {
  enumerable: true,
  writable: false,
  value: "21/08/2016"
})

laila.nascimento = "01/01/2019"
console.log(laila.nascimento)
console.log(Object.keys(laila))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const p1 = {b: 2}
const p2 = {c: 3, a: 4}
const obj = Object.assign(dest, p1, p2)
console.log(obj)

Object.freeze(obj)
obj.c = 1222
console.log(obj)
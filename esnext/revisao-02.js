// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 4))

// Arrow function this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(tx = "node") {
  console.log(tx)
}
log()
log("Valorrrrr")
log(null)

// Operador rest
function total(...nums) {
  let tt = 0
  nums.forEach(n => tt += n)
  return tt
}
console.log(total(2, 3, 4, 5))
// Métodos Importantes
const pilotos = ["Hamilton", "Verstappen", "Rubinho", "Massa"]
pilotos.pop()
console.log(pilotos)

pilotos.push("Raikkonen")
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift("Ricardo")
console.log(pilotos)

// splice pode adicionar e remover elementos
// # Adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// # Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
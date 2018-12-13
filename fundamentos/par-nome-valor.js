const saudacao = "Olá" // Contexto léxico 1

function exec() {
  const saudacao = "Fala ai..." // Contexto léxico 2

  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    lograouro: "Rua da saudação...",
    numero: 124
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
for (let letra of "Cod3r") {
  console.log(letra);
}

console.log("============", "Usando in");
const assuntosEcma = ["Map", "Set", "Promise"]
for (let i in assuntosEcma) {
  console.log(i);
}

console.log("==========", "Usando of");
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

console.log("\nAssuntos Map");
const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }]
])

console.log("Usando of\n");
for (let assunto of assuntosMap) {
  console.log(assunto);
}

console.log();
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

console.log();
for (let value of assuntosMap.values()) {
  console.log(value);
}

console.log();
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}
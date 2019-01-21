const fs = require("fs")
const caminho = __dirname.concat("/arquivo.json")

// Sincrono
let conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// Assincrono
conteudo = fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require("./arquivo.json")
console.log(config.db)

fs.readdir(__dirname, (err, conteudo) => {
  console.log("Conteudo da pasta")
  console.log(conteudo)
})
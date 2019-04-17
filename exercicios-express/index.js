const express = require("express")
const app = express()

const saudacao = require("./saudacaoMid")

app.get("/clientes/relatorio", (req, res) => {
  res.send(`Cliente relatorio ${req.query.completo} ano ${req.query.ano}`)
})

app.post("/corpo", (req, res) => {
  let corpo = ""
  req.on("data", function(parte) {
    corpo += parte
  })

  req.on("end", function() {
    res.send(corpo)
  })
})

app.get("/clientes/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado.`)
})

app.use(saudacao("Laila"))

app.use("/opa", (req, res, next) => {
  console.log("Antes...")
  next()
})

app.get("/opa", (req, res, next) => {
  // res.send("Estou <b>legal</b>!")
  
  // res.json({
  //   name: "Extensão",
  //   price: "2.0",
  //   discount: "0.1"
  // })

  console.log("Durante...")
  res.json([
    {id: 2, name: "Laila"},
    {id: 36, name: "Jardiel"}
  ])
  next()

})

app.use("/opa", (req, res) => {
  console.log("Depois...")
})

app.listen(3000, () => {
  console.log("Backend executando")
})
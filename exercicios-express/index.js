const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const saudacao = require("./saudacaoMid")

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/clientes/relatorio", (req, res) => {
  res.send(`Cliente relatorio ${req.query.completo} ano ${req.query.ano}`)
})

app.post("/corpo", (req, res) => {
  // let corpo = ""
  // req.on("data", function(parte) {
  //   corpo += parte
  // })

  // req.on("end", function() {
  //   res.send(corpo)
  // })

  res.send(req.body)
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
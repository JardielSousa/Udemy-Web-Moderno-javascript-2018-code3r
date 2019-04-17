const express = require("express")
const app = express()

const saudacao = require("./saudacaoMid")

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
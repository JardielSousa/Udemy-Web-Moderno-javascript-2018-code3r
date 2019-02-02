const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/usuarios", (req,resp,next) => {
  console.log(req.body)
  resp.send("<h1>Parabéns. Usuário incluido!!</h1>")
})

app.post("/usuarios/:id", (req, resp, next) => {
  console.log(req.params.id)
  console.log(req.body)
  resp.send("<h1>Parabéns. Usuário alterado!!</h1>")
})

app.listen(3003)
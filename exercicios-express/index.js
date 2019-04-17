const express = require("express")
const app = express()

app.use("/opa", (req, res) => {
  // res.send("Estou <b>legal</b>!")
  
  // res.json({
  //   name: "Extensão",
  //   price: "2.0",
  //   discount: "0.1"
  // })

  res.json([
    {id: 2, name: "Laila"},
    {id: 36, name: "Jardiel"}
  ])
})

app.listen(3000, () => {
  console.log("Backend executando")
})
function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase(), "!!!");  
  } catch (error) {
    tratarErroELancar()
  } finally {
    console.log("\nTerminou\n");
  }
}

function tratarErroELancar(erro) {
  // throw new Error("Erro ao executar UpperCase")
  // throw 10
  // throw true
  // throw "Mensagem"
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

const obj = {nome: "Roberto"}
imprimirNomeGritado(obj)
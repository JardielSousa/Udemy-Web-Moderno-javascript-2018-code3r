function saudacao(nome) {
  return function (res, rep, next) {
    console.log(`Seja bem vindo ${nome}!!`);
    next()
  }
}

module.exports = saudacao
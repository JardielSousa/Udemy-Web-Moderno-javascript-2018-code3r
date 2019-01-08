class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
  
  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa("Jardiel")
p1.falar()

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome no arrow é ${nome}`)
  }
}

const p2 = criarPessoa("Sousa")
p2.falar()
// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object()
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
  }
}

const p1 = new Produto("Canetas", 8.5, 0.1)
const p2 = new Produto("Notebook", 1123.0, 0.1)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getSalarioLiquido() {
      return (salario / 30) * (30 - faltas)
    }
  }  
}

const f1 = criarFuncionario("João", 7980, 4)
const f2 = criarFuncionario("Maria", 11400, 1)
console.log(f1.getSalarioLiquido(), f2.getSalarioLiquido())

// Object.create
const fl = Object.create(null)
fl.nome = "Laila"
console.log(fl)

// Uma função famosa que retorna um OBJETO...
const fromJSON = JSON.parse("{\"info\": \"Sou um JSON\"}")
console.log(fromJSON)
console.log(Math.ceil(6.2));

const obj1 = {}
obj1.nome = "Bola"
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome
  this.exec = function() {
    console.log("Exec...", this.nome)
  }
}

const obj2 = new Obj("Jardiel")
const obj3 = new Obj("Sousa")

console.log(obj2.nome);
console.log(obj3.nome);

obj3.exec()
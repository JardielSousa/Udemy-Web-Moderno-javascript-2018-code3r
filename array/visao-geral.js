console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Nome 01", "Nome 02", "Nome 03")
console.log(aprovados)

aprovados = ["Nome 01", "Nome 02", "Nome 03"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Nome 04"
aprovados.push("Nome 05")
console.log(aprovados.length)

aprovados[9] = "Nome 06"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Nome 01", "Nome 02", "Nome 03"]
aprovados.splice(1, 1)
console.log(aprovados)
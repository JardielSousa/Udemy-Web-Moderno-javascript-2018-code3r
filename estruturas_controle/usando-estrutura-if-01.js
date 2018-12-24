function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com nota "+nota);
    
  }
}
soBoaNoticia(8.1)
soBoaNoticia(7.0)
soBoaNoticia(6.9)

function seForVerdadeEuFalo(value) {
  if (value) {
    console.log("è verdade..... "+value);
  }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
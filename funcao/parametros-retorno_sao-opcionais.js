function area(l,a) {
  const area = l*a
  if (area > 20) {
    console.log(`Valor acima do premitido: ${area}m2`)
  } else {
    return area
  }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,3,4,5))
console.log(area(5,5))
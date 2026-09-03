function esCaro(monto) {
  if (monto > 10000) {
    return "caro"
  } else {
    return "barato"
  }
}

console.log(esCaro(20000))
console.log(esCaro(5000))
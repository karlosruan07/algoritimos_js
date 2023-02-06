
let numero = 2, numero_decimal = 9.1234, k='    10'

console.log(numero.toExponential(2))
console.log(numero_decimal.toFixed(2))

console.log(numero_decimal.toPrecision(2))//retorna um numero com um tamanho especifico
console.log(numero_decimal.toPrecision(4))

console.log(numero_decimal.valueOf())

console.log(Number(true))
console.log(Number(false))
console.log(Number('10'))//converte para inteiro
console.log(Number(k))//retorna um inteiro mesmo se houver espaços em branco
console.log(Number('teste'))//retorna um NaN se for conseguir ser convertido



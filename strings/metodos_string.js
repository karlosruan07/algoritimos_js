
let texto = 'RuanCarlos'

console.log(texto.length)

console.log(texto.slice(1,4))
console.log(texto.slice(-6))

function imprime_linha() {
    return console.log('==========================================')
}
imprime_linha()

let nome = 'Eu me chamo Ruan'

console.log(nome.replace('ruan', 'Carlos'))//é case sensitive e pega o primeiro elemento equivalente
console.log(nome.toUpperCase())//converte para maiúsculas.
console.log(nome.toLowerCase())//converte para minusculas

imprime_linha()

let texto1 = 'abc', texto2 = 'xyz'
console.log(texto1.concat(texto2) )

imprime_linha()

let teste = '5'

console.log(teste.padStart(3,0))//adiciona a quantidade de 0 no inicio da string, 3-1
console.log(teste.padEnd(4,0))




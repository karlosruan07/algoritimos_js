
let texto = 'Hello,Word !'

console.log(texto.charAt(1))
console.log(texto.charCodeAt(0))//retorna o valor em utf-16

function imprime_linha() {
    return console.log('==========================================')
}
imprime_linha()
console.log(texto[2])

let a = texto.split(",")
console.log(a[0])



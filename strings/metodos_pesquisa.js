
function imprime_linha() {
    return console.log('==========================================')
}

let texto = 'Ruan carlos tavares reis Ruan'

console.log(texto.indexOf('u'))//retorna a primeira ocorrencia na string

console.log(texto.lastIndexOf('Ruan'))//usa case sensitive e retorna -1 se não for encontrado

console.log(texto.search('Ruan'))//retorna o começo da posicao da primeira ocorrencia

console.log(texto.includes('carlos'))//retorna true se o valor está incluso na varável

imprime_linha()

console.log(texto.startsWith('R'))//retorna true se a string se inicia com o parâmetro
console.log(texto.endsWith('an'))
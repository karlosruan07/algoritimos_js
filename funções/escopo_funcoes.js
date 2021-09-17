
//variáveis globais
var valor1 = 1, valor2 = 2, nome = 'Ruan'

function soma() {
    //return console.log(valor1 + valor2)
}

soma()//chama a função e retorna 3

function score() {
    var valor1 = 100, valor2 = 200//variável de escopo local

    function resutado() {
        return console.log(`${nome} tem ${valor1+valor2} pontos !`)
    }

    resutado()
}

score()

console.log(valor1, valor2, nome)




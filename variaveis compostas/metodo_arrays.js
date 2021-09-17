
let lista = [1,2,'Ruan']

lista.pop()//remove o ultimo valor da lista
lista.push('Carlos')//adiciona um item na ultima posição
lista.reverse()//ordem inversa
lista.shift()//remove o primeiro


console.log(lista)

let lista2 = ['ruan',1,2,'carlos']

let nome = lista2.indexOf("ruan")

if (nome in lista2) {
    console.log('True')
} else {
    console.log('False')
}


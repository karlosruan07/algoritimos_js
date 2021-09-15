
function minha_funcao(objeto) {
    objeto.make = 'toyota'
    return console.log(objeto)
}

var meucarro = {make:'honda', modal:'accord', year:1998}

var x = meucarro.make

console.log(x)

minha_funcao(meucarro)



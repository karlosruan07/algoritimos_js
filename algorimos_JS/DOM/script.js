
function carregar() {
    var titulo_pagina = window.document.getElementById("titulo_pagina")
    
    var nome_usuario = String(window.prompt('Digite seu nome : '))
    //alert(`É um prazer conhecer você ${nome_usuario}`)

    var valor1 = Number(window.prompt('Primeiro Valor : '))
    var valor2 = Number(window.prompt('Segundo valor : '))

    var soma = valor1 + valor2
    var subtracao = valor1 - valor2
    
    titulo_pagina.innerHTML = `A soma entre esses dois valores é ${soma}<br>`
    titulo_pagina.innerHTML += `A subtração entre esses dois valores é ${subtracao}<br>`

    switch (nome_usuario) {
        case 'Ruan':
            titulo_pagina.innerHTML += `É UM PRAZER CONHECER VOCÊ ${nome_usuario}`
            break;
    
        default:
            titulo_pagina.innerHTML += `NOME NÃO ENCONTRADO`
            break;
    }

}



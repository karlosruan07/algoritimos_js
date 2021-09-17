
function adicionar() {
    
    let numtxt = document.getElementById('txt')
    let cardapio = document.getElementById('cardapio')
    let descricao = document.getElementById('descricao')

    if (numtxt.value.length == 0) {
        alert('Entrada inválida !!')
    } else {

        descricao.innerHTML = ''

        let lista = []
        let texto = String(numtxt.value)
        
        lista.push(texto)
        numtxt.value = ''

        for(let pos=0; pos<lista.length; pos++){
            let item = document.createElement('option')
            item.text = lista[pos]
            cardapio.appendChild(item)
        }
    }
}


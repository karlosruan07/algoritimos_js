
function adicionar() {
    let numtxt = document.getElementById('numtxt')

    let tabela = document.getElementById('tabela')

    let mostrar = document.getElementById('mostrar')

    if (numtxt.value.length == 0) {
        alert('valor inválido')
    } else {

        var lista = []

        var num = Number(numtxt.value)

        if (num in lista) {
            alert('o item já está incluso')
        } else {
            lista.push(num)
        }
        
        for(pos in lista){
            let item = document.createElement('option')
            item.text = lista[pos]
            tabela.appendChild(item)
        }

    }

    mostrar.innerText = lista


}




function calcular() {
    let numtxt = window.document.getElementById('numtxt')
    let tabuada = window.document.getElementById('tabuada')
    
    if (numtxt.value.length == 0) {
        alert('Digite uma valor válido !')
    } else {

        tabuada.innerHTML = ''
 
        let numero = Number(numtxt.value)
        let contador = 1

        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`
            tabuada.appendChild(item)
            contador ++
        }

    }
}











































































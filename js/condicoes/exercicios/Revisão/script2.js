
function somar() {
    
    var texto1 = Number(document.getElementById("texto1").value)
    var texto2 = Number(document.getElementById("texto2").value)
    var valor = Number(document.getElementById("soma").value)


    var soma = texto1 + texto2
    //window.alert(`A soma entre esses dois valores é ${soma}`)

    var resul = window.document.getElementById("resul")
    

    if (valor == soma) {
        resul.innerHTML = `Você acertou !`        
    }else{resul.innerHTML = `Que pena você errou !`}

}
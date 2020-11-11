/*function carregar() {

    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var salto = window.document.getElementById('salto')

    var resul = window.document.getElementById('resul')

    if(inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0){
        window.alert('Falta dados !')
    }else{
        resul.innerHTML = 'Contando ...<br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var s = Number(salto.value)

        if(s <= 0){
            resul.innerHTML = 'Você inseriu o passo inválido !'
            s = 1
        }

        if(i < f){
            for(var c = i; c <= f; c += s){
                resul.innerHTML += `${c}\u{1f449}`
            }
        }else{
            for(var c = i; c >= f; c -= s){
                resul.innerHTML += `${c} \u{1F449}`
                
            }
        }
        resul.innerHTML += `\u{1f3c1}`
    }
}
*/

function carregar2() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var salto = document.getElementById('salto')
    var res = window.document.getElementById('resul')

    if(Number(inicio.value.length == 0) || Number(fim.value.length == 0) || Number(salto.value.length == 0)){
        window.alert('Falta dados !')
    }else{
        res.innerHTML = 'Contando ...<br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var s = Number(salto.value)

        var c = i

        if(s <= 0){
            res.innerHTML = 'Salto inválido. Vou considerar com 1 <br>'
            s = 1
        }

        if(i < f){
            while(c <= f){
                res.innerHTML += `${c}\u{1F449}`
                c += s
            }
        }
        if(i > f){
            while(c >= f){
                res.innerHTML += `${c}\u{1f449}`
                c -= s
            }

        }
        res.innerHTML += '\u{1f3c1}'
    }
}































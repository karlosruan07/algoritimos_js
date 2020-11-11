
function carregar() {
    var usertxt = window.document.getElementById('user')
    var senhatxt = window.document.getElementById('senha')
    
    var user = String(usertxt.value)
    var senha = String(senhatxt.value)

    var rodape1 = window.document.getElementById('rodape1')
    var rodape2 = window.document.getElementById('rodape2')

    rodape1.innerHTML = user
    rodape2.innerHTML = senha
}
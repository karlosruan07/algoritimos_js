
function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')

    var hora = new Date
    var horaAtual = hora.getHours()
    var horacompleta = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
    
    msg.innerHTML = (`Agora são exatamente ${horacompleta} Horas`)

    if(horaAtual >= 0 && horaAtual < 12){
        imagem.src = 'img/manha.jpg'
        document.body.style.background = '#ffff00'
    }else if( horaAtual >= 12 && horaAtual < 18){
        imagem.src = 'img/tarde.png'
        document.body.style.background = '#0000ff ' 
    }else{
        imagem.src = 'img/noite.jpg'
        document.body.style.background = '#8d847f'
    }
}
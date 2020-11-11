
function verificar() {
    var data = new Date
    var anoAtual = data.getFullYear()

    var resAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(resAno.value.length == 0 || resAno.value > anoAtual){
        window.alert('[ERROR] Tente novamente !')
    }else{
        var radsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(resAno.value) //sempre que aparecer NaN é porque não está pegando o valor, então usamos o método (.value)
        

        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')


        if(radsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 10){
                //criança
                img.setAttribute('src','img/bebeHomem.jpg')
            }else if(idade <= 30){
                //Adolescente
                img.setAttribute('src', 'img/adolesHomem.jpg')
            }else{
                img.setAttribute('src', 'img/idoso.jpg')
            }


        }else if(radsex[1].checked){
            genero = 'Mulher'

            if(idade > 0 && idade <= 10){
                img.setAttribute('src','img/bebêMulher.jpg')
            }else if(idade <= 30){
                //adolescente
                img.setAttribute('src','img/AdolesMulher.jpg')
            }else{
                //idosa
                img.setAttribute('src','img/idosa.jpg')
            }
            
        }
        res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
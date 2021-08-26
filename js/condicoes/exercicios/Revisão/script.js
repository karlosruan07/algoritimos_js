
function carregar() {
    //window.alert("Funcionou")
    var data = new Date
    var ano = data.getFullYear()

    var txtIdade = window.document.getElementById('txtIdade')
    var idade = ano - Number(txtIdade.value)

    var res = window.document.getElementById('res')
    
    
    var genero = ''
    var caixatxt = window.document.getElementsByName('caixatxt')

    if (caixatxt[0].checked && caixatxt[1].checked) {
        genero = 'ERROR'
    }

    if (caixatxt[0].checked) {
        genero = 'Masculino'
    }

    else{
        if (caixatxt[1].checked) {
            genero = 'Femenino'
        }
    }

    res.innerHTML = `A idade calculada é de ${idade} e o sexo é ${genero}`

}
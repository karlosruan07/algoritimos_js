
var agora = new Date
var hora = agora.getHours()

console.log()
console.log(`Agora são exatamente ${hora} horas.`)
console.log()

if(hora < 12){
    console.log('Bom Dia')
}else if(hora < 18){
    console.log('Boa Tarde !')
} else{
    console.log('Boa Noite !')
}

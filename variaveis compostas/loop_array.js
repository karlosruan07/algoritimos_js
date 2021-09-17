
let valores = [1,4,2,5,6]
valores.sort()
for(let pos=0; pos<valores.length; pos++){
    //console.log(`A chave ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores){
    //console.log(`A chave ${pos} tem o valor ${valores[pos]}`)
}


valor = valores.indexOf(10)//retorna o indice desse valor que está nos parâmetros, se não existir ele retorna -1

if (valor == -1) {
    console.log('O valor procurado não existe !')
} else {
    console.log(valor)
}



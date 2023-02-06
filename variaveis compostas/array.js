
array = [2,1,3,4]

array[4] = 5 //cria um variável nessa posição se não houver indice
array.push(6)//adiciona um valor na ultima posição


console.log(array)
console.log(array.length)//conta quantos elementos tem no array, o length não é um método e sim um atributo

console.log(array.sort())//este metodo coloca as letra em minusculas


let newarray = Array('Ruan', 'carlos', 'tavares', 'reis', 23, 'santarém')
let alter = newarray.indexOf('tavares')

console.log(typeof(Number(newarray)))
newarray.splice(Number(newarray))

newarray.push('1000')
for(let itens of newarray) {
    console.log(itens)
}

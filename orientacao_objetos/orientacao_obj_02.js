//exemplo de função construtora

function Car(marca, modelo, ano, dono) {//this server para atribuir valores à propriedade do objeto, com base nos dados que são passados nos parâmetros
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.dono = dono
}

function Pessoa(nome, idade, peso, cidade) {
    this.nome = nome,
    this.idade = idade,
    this.peso = peso,
    this.cidade = cidade
}


let info_ruan = new Pessoa('ruan', 22, 70.1, 'santarém')
info_ruan.sexo = 'M'

//console.log(info_ruan)

let info_carro = new Car('chevrolet', 'onix', 2019, info_ruan)

sexo_dono = info_carro.dono.sexo

console.log(sexo_dono)



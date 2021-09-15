
function carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano

    this.mostra_info = mostra_info
}

function mostra_info() {
    var resultado = "Um Belo " + this.marca + " do modelo " + this.modelo + " do ano de " + this.ano + ".";
    
    return console.log(resultado)
}

let novo_carro = new carro('chevrolet', 'prisma', 2018)

novo_carro.mostra_info()


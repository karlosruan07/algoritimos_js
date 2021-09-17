
let Animal = {
    tipo : 'invertebrado',
    mostrar_tipo : function() {
        return console.log(this.tipo)
    }
}

let criar_animal = Object.create(Animal)

criar_animal.mostrar_tipo()

let criar_animal_tipo_peixe = Object.create(Animal)

criar_animal_tipo_peixe.tipo = 'peixe'

criar_animal_tipo_peixe.mostrar_tipo()

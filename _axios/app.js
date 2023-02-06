
import axios from 'axios';

class Api{
    static async getAdress(cep){
        const response = new Adrress((await axios.get(`https://viacep.com.br/ws/${cep}/json/ `)).data)
        return response
    }
}

class Adrress{
    constructor({logradouro, bairro, localidade}){
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade
    }
}

Api.getAdress('68020550').then(v => {console.log(v)})

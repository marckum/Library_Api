'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Biblioteca extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:1',
      cnpj: 'required|max:20|min:14',
      cep: 'required|max:10|min:8',
      email: 'email'

      
    }
  }
}

module.exports = Biblioteca

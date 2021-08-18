'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Editora extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:50|min:1',
      cnpj: 'required|max:20|min:14',
      email: 'email'
      
    }
  }
}

module.exports = Editora

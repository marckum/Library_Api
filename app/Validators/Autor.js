'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Autor extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:20|min:1',
      cpf: 'required|max:14|min:14',
      data_nacimento: 'required|max:8|min:8|date',
      email: 'email'
      
    }
  }
}

module.exports = Autor

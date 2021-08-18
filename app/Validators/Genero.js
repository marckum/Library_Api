'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Genero extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      genero: 'required',
      
    }
  }
}

module.exports = Genero

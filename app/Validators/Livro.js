'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Livro extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required',
      data_lancamento: 'required|date',
      biblioteca_id: 'required|max:1',
      autor_id: 'required|max:1',
      genero_id: 'required|max:1',
      editora_id: 'required|max:1'
      
    }
  }
}

module.exports = Livro

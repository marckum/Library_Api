'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Autor extends Model {
    static getCampos(){
        return['nome', 
                'cpf',
                'data_nacimento',
                'email',
                'telefone']
    }

    livros(){
        return this.hasMany ('App/Models/Livro')
    }
}

module.exports = Autor

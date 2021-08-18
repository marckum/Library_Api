'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Biblioteca extends Model {
    static getCampos(){
        return['nome', 
                'cnpj',
                'cep',
                'email',
                'telefone']
    }
    livros(){
        return this.hasMany ('App/Models/Livro')
    }
}




module.exports = Biblioteca

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genero extends Model {
    static getCampos(){
        return['genero']
    }
    livros(){
        return this.hasMany ('App/Models/Livro')
    }
}

module.exports = Genero

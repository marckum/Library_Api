'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Livro extends Model {
    static getCampos(){
        return['nome',
                'data_lancamento',
                'autor_id',
                'biblioteca_id',
                'genero_id',
                'editora_id'
                ]
    }

    biblioteca(){
        return this.belongsTo ('App/Models/Biblioteca')
    }

    autor(){
        return this.belongsTo ('App/Models/Autor')
    }
    editora(){
        return this.belongsTo ('App/Models/Editora')
    }

    genero(){
        return this.belongsTo ('App/Models/Genero')
    }

    

}

module.exports = Livro

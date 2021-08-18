'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorSchema extends Schema {
  up () {
    this.create('autors', (table) => {
      table.increments()
      
      table.string('nome', 100).notNullable()
      table.bigInteger('cpf', 11)
      table.date('data_nacimento')
      table.string('email')
      table.string('telefone', 14)

      table.timestamps()
    })
  }

  down () {
    this.drop('autors')
  }
}

module.exports = AutorSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BibliotecaSchema extends Schema {
  up () {
    this.create('bibliotecas', (table) => {
      table.increments()
      
      table.string('nome', 30).notNullable()
      table.bigInteger('cnpj', 14).notNullable()
      table.integer('cep', 8).notNullable()
      table.string('email')
      table.integer('telefone', 14)
      
      table.timestamps()
    })
  }

  down () {
    this.drop('bibliotecas')
  }
}

module.exports = BibliotecaSchema

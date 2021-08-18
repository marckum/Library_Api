'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EditoraSchema extends Schema {
  up () {
    this.create('editoras', (table) => {
      table.increments()

      table.string('nome', 30).notNullable()
      table.bigInteger('cnpj', 14).notNullable()
      table.string('email')
      table.integer('telefone', 14)

      table.timestamps()
    })
  }

  down () {
    this.drop('editoras')
  }
}

module.exports = EditoraSchema

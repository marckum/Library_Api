'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroSchema extends Schema {
  up () {
    this.create('livros', (table) => {
      table.increments()
      
      table.string('nome').notNullable()
      table.date('data_lancamento')
      table.integer('biblioteca_id').references('id').inTable('bibliotecas').notNullable()
      table.integer('autor_id').references('id').inTable('autors').notNullable()
      table.integer('genero_id').references('id').inTable('generos').notNullable()
      table.integer('editora_id').references('id').inTable('editoras').notNullable()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('livros')
  }
}

module.exports = LivroSchema

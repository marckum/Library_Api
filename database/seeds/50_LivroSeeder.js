'use strict'

/*
|--------------------------------------------------------------------------
| LivroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Livro = use('App/Models/Livro')

class LivroSeeder {
  async run () {
    await Livro.createMany([
      {nome: 'As Aventuras de um Gigante',
       data_lancamento:'2019/12/2',
       biblioteca_id:'1',
       genero_id:'1',
       autor_id:'1',
       editora_id:'1',
      }
    ])
  }
}

module.exports = LivroSeeder

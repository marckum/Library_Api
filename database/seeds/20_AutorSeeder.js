'use strict'

/*
|--------------------------------------------------------------------------
| AutorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Autor = use('App/Models/Autor')

class AutorSeeder {
  async run () {
    await Autor.createMany([
      {
        nome:'J. Ribeiro ',
        data_nacimento:'1999/05/12',
        cpf:'XXX.XXX.XXX-XX',
        email:'ribeiro@outlook.com'
      }
    ])
  }
}

module.exports = AutorSeeder

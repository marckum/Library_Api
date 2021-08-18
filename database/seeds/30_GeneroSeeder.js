'use strict'

/*
|--------------------------------------------------------------------------
| GeneroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Genero = use('App/Models/Genero')

class GeneroSeeder {
  async run () {
    await Genero.createMany([
      {genero:'Aventura'
          }
    ])
  }
}

module.exports = GeneroSeeder

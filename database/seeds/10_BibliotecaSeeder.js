'use strict'

/*
|--------------------------------------------------------------------------
| BibliotecaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Biblioteca = use('App/Models/Biblioteca')

class BibliotecaSeeder {
  async run () {
    await Biblioteca.createMany([
      {nome: 'Biblioteca Publica',
       cnpj:'XX. XXX. XXX/0001-XX',
       cep:'XXXXX-XXX',
       telefone:'(61) 90000-0000',
       email:'biblioteca@gmail.gov.br',}
    ])
    
  }
}

module.exports = BibliotecaSeeder

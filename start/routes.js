'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(()=>{

    Route.resource('/bibliotecas', 'BibliotecaController')
         .apiOnly()
         .validator(new Map([
          [['store', 'update'], 'Biblioteca'],
        ]))
    
    Route.resource('/livros', 'LivroController')
         .apiOnly()
         .validator(new Map([
          [['store', 'update'], 'Livro'],
        ]))

   Route.resource('/autores', 'AutorController')
        .apiOnly()
        .validator(new Map([
          [['store', 'update'], 'Autor'],
        ]))
     

    Route.resource('/editoras', 'EditoraController')
         .apiOnly()
         .validator(new Map([
          [['store', 'update'], 'Editora'],
        ]))
     
    Route.resource('/generos', 'GeneroController')
         .apiOnly()
         .validator(new Map([
          [['store', 'update'], 'Genero'],
        ]))
     
})//.middleware('auth')
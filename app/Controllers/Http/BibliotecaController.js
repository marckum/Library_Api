'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Biblioteca = use('App/Models/Biblioteca')

/**
 * Resourceful controller for interacting with bibliotecas
 */
class BibliotecaController {
  /**
   * Show a list of all bibliotecas.
   * GET bibliotecas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Biblioteca.all()
  }

  /**
   * Render a form to be used for creating a new biblioteca.
   * GET bibliotecas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new biblioteca.
   * POST bibliotecas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Biblioteca.getCampos()
    const dados = request.only(campos)

    return await Biblioteca.create(dados)
  }


  /**
   * Display a single biblioteca.
   * GET bibliotecas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Biblioteca.query()
                           .with('livros')
                           .where('id', params.id)
                           .first()
                        
  }

  /**
   * Render a form to update an existing biblioteca.
   * GET bibliotecas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update biblioteca details.
   * PUT or PATCH bibliotecas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dado = await Biblioteca.findOrFail(params.id)

    const campos = Biblioteca.getCampos()
    const novo_dado = request.only(campos)

    dado.merge(novo_dado)
    await dado.save()

    return dado

  }

  /**
   * Delete a biblioteca with id.
   * DELETE bibliotecas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const dado = await Biblioteca.findOrFail(params.id)

    return await dado.delete()

  }
}

module.exports = BibliotecaController

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Livro = use('App/Models/Livro')

/**
 * Resourceful controller for interacting with livros
 */
class LivroController {
  /**
   * Show a list of all livros.
   * GET livros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Livro.all()
  }

  /**
   * Render a form to be used for creating a new livro.
   * GET livros/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new livro.
   * POST livros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Livro.getCampos()
    const dados = request.only(campos)

    return await Livro.create(dados)
  }


  /**
   * Display a single livro.
   * GET livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Livro.query()
                      .with('biblioteca')
                      .with('genero')
                      .with('autor')
                      .with('editora')
                      .where('id', params.id)
                      .first()
                        
  }

  /**
   * Render a form to update an existing livro.
   * GET livros/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update livro details.
   * PUT or PATCH livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dado = await Livro.findOrFail(params.id)

    const campos = Livro.getCampos()
    const novo_dado = request.only(campos)

    dado.merge(novo_dado)
    await dado.save()

    return dado

  }

  /**
   * Delete a livro with id.
   * DELETE livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const dado = await Livro.findOrFail(params.id)

    return await dado.delete()

  }
}

module.exports = LivroController

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Autor = use('App/Models/Autor')

/**
 * Resourceful controller for interacting with autors
 */
class AutorController {
  /**
   * Show a list of all autors.
   * GET autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Autor.all()
  }

  /**
   * Render a form to be used for creating a new autor.
   * GET autors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new autor.
   * POST autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Autor.getCampos()
    const dados = request.only(campos)

    return await Autor.create(dados)
  }


  /**
   * Display a single autor.
   * GET autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Autor.query()
                      .with('livros')
                      .where('id', params.id)
                      .first()
                        
  }

  /**
   * Render a form to update an existing autor.
   * GET autors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update autor details.
   * PUT or PATCH autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dado = await Autor.findOrFail(params.id)

    const campos = Autor.getCampos()
    const novo_dado = request.only(campos)

    dado.merge(novo_dado)
    await dado.save()

    return dado

  }

  /**
   * Delete a autor with id.
   * DELETE autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const dado = await Autor.findOrFail(params.id)

    return await dado.delete()

  }
}

module.exports = AutorController

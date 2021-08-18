'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Editora = use('App/Models/Editora')

/**
 * Resourceful controller for interacting with editoras
 */
class EditoraController {
  /**
   * Show a list of all editoras.
   * GET editoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Editora.all()
  }

  /**
   * Render a form to be used for creating a new editora.
   * GET editoras/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new editora.
   * POST editoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Editora.getCampos()
    const dados = request.only(campos)

    return await Editora.create(dados)
  }


  /**
   * Display a single editora.
   * GET editoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Editora.query()
                        .with('livros')
                        .where('id', params.id)
                        .first()
                        
  }

  /**
   * Render a form to update an existing editora.
   * GET editoras/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update editora details.
   * PUT or PATCH editoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dado = await Editora.findOrFail(params.id)

    const campos = Editora.getCampos()
    const novo_dado = request.only(campos)

    dado.merge(novo_dado)
    await dado.save()

    return dado

  }

  /**
   * Delete a editora with id.
   * DELETE editoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const dado = await Editora.findOrFail(params.id)

    return await dado.delete()

  }
}

module.exports = EditoraController

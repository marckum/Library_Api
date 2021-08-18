'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Genero = use('App/Models/Genero')

/**
 * Resourceful controller for interacting with generos
 */
class GeneroController {
  /**
   * Show a list of all generos.
   * GET generos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Genero.all()
  }

  /**
   * Render a form to be used for creating a new genero.
   * GET generos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new genero.
   * POST generos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Genero.getCampos()
    const dados = request.only(campos)

    return await Genero.create(dados)
  }


  /**
   * Display a single genero.
   * GET generos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Genero.query()
                       .with('livros')
                       .where('id', params.id)
                       .first()
                        
  }

  /**
   * Render a form to update an existing genero.
   * GET generos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update genero details.
   * PUT or PATCH generos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dado = await Genero.findOrFail(params.id)

    const campos = Genero.getCampos()
    const novo_dado = request.only(campos)

    dado.merge(novo_dado)
    await dado.save()

    return dado

  }

  /**
   * Delete a genero with id.
   * DELETE generos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const dado = await Genero.findOrFail(params.id)

    return await dado.delete()

  }
}

module.exports = GeneroController

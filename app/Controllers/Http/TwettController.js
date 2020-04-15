'use strict'
const Tweet = use('App/Models/Twett')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with twetts
 */
class TwettController {
  /**
   * Show a list of all twetts.
   * GET twetts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const twetts = await Tweet.all()
    return twetts
  }



  /**
   * Create/save a new twett.
   * POST twetts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only(['content'])
    const twett = await Tweet.create({ 'user_id': auth.user.id, ... data })
    return twett
  }

  /**
   * Display a single twett.
   * GET twetts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const twett = await Tweet.findOrFail(params.id);
    return tweet
  }

  /**
   * Update twett details.
   * PUT or PATCH twetts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, auth, response }) {
    const twett = await Tweet.findOrFail(params.id);

    if(twett.user_Id !== auth.user.id){
      return response.status(401).send()
    }
    twett.delete()
  }

  /**
   * Delete a twett with id.
   * DELETE twetts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TwettController

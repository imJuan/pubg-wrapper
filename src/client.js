const Regions = require('./util/constants').Regions
const Rest = require('./rest/handler')

module.exports = class Client
{
	constructor(apiKey, options = {})
	{
		this.apiKey = apiKey
		this.region = options.region || Regions.PC_NORTH_AMERICA
		this.rest = new Rest(this)
	}

	/**
	 * Check status of API
	 * @returns {Promise<Status>}
	 */
	getStatus()
	{
		return this.rest.getStatus()
	}

	/**
	 * Get collection of players
	 * @param filter {Object}
	 * @param [filter.names] {String[]}
	 * @param [filter.ids] {String[]}
	 * @returns {Promise<Player[]>}
	 */
	getPlayers(filter={})
	{
		return this.rest.getPlayers(filter)
	}

	getPlayer(id)
	{
		return this.rest.getPlayer(id);
	}

	getMatch()
	{
	}
}
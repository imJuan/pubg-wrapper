const Match = require('./match')

module.exports = class player
{
	constructor(data)
	{
		this.setData(data)
	}

	setData(data)
	{
		/**
		 * Object type
		 * @type {String}
		 * @private
		 */
		this.type = data.type

		/**
		 * Player ID
		 * @type {String}
		 */
		this.id = data.id


		if (data.hasOwnProperty('attributes'))
		{
			/**
			 *
			 * @type {Date}
			 */
			this.createdAt = new Date(data.attributes.createdAt)

			/**
			 * Player name
			 * @type {String}
			 */
			this.name = data.attributes.name

			/**
			 * Version of game
			 * @type {String}
			 */
			this.patchVersion = data.attributes.patchVersion

			/**
			 * Platform-region shard
			 * @type {String}
			 */
			this.shardId = data.attributes.shardId

			/**
			 * Studio and game
			 * @type {String}
			 */
			this.titleId = data.attributes.titleId

		}

		/**
		 * Player matches
		 * @type {Match[]}
		 * @todo Just get ids only, no object.. maybe
		 */

		this.matches = []
		for (let match in data.relationships.matches.data)
		{
			this.matches.push(new Match(match))
		}

		// TODO: get more info on these
		this.updatedAt = data.attributes.updatedAt
		this.assets = data.relationships.assets.data
		this.stats = data.attributes.stats
	}
}
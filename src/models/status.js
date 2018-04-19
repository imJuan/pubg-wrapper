module.exports = class Status
{
	constructor(data)
	{
		this.setData(data)
	}

	setData(data)
	{
		//Object.assign(this, data)

		/**
		 * @type {String}
		 */
		this.type = data.type

		/**
		 * @type {String}
		 */
		this.id = data.id

		/**
		 * Release date of current API version
		 * @type {Date}
		 */
		this.releasedAt = new Date(data.attributes.releasedAt)

		/**
		 * Current version of API
		 * @type {String}
		 */
		this.version = data.attributes.version
	}
}
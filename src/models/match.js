module.exports = class match
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
		 * ID of match
		 * @type {String}
		 */
		this.id = data.id
	}
}
const unirest = require('unirest')
const endpoints = require('./endpoints')
const Status = require('../models/status')
const Player = require('../models/Player')

module.exports = class RestManager
{
	constructor(client)
	{
		this.client = client
	}

	makeRequest(method, path, querystring = {})
	{
		return new Promise(((resolve, reject) =>
		{
			let req = unirest(method, path)

			req.header('Authorization', `Bearer ${this.client.apiKey}`)
			req.header('Accept', 'application/vnd.api+json')
			req.end((res) =>
			{
				if (res.error)
					reject(res)
				else
					resolve(res.body)
			})
		}))
	}

	getStatus()
	{
		return this.makeRequest('GET', endpoints.Status)
		.then(data => new Status(data.data))
		.catch(err => Promise.reject(err))
	}

	getPlayers(filter = {})
	{
		if (filter.names)
			var req = this.makeRequest('GET', endpoints.Players(this.client.region, 'playerNames', encodeURIComponent(filter.names.toString())))
		else if (filter.ids)
			var req = this.makeRequest('GET', endpoints.Players(this.client.region, 'playerIds', encodeURIComponent(filter.ids.toString())))
		else
			return Promise.reject('No filter used')

		return req.then(data =>
		{
			let players = []
			data.data.forEach((el) => players.push(new Player(el)))
			return players
		})
	}

	getPlayer(id)
	{
		return this.makeRequest('GET', endpoints.Player(this.client.region, id))
		.then(data => new Player(data.data))
		.catch(err => Promise.reject(err))
	}
}
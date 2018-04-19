const base = 'https://api.playbattlegrounds.com'

// TODO: redo this crap
module.exports = {
	Base: base,
	Match: (region, id) => `${base}/shards/${region}/matches/${id}`,
	Players: (region, filter, list) => `${base}/shards/${region}/players?filter[${filter}]=${list}`,
	Player: (region, id) => `${base}/shards/${region}/players/${id}`,
	Status: `${base}/status`,
	Samples: (region, filter) => `${base}/shards/${region}/samples`
}
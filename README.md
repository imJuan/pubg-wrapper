messing around with [pubg api](developer.playbattlegrounds.com)


#
## Retrieving players
Get multiple players by name
```js
pubg.getPlayers({names: ['name1', 'name2']})
.then(players =>
{
  players.forEach(el => console.log(el.name))
})

```

Get multiple players by id
```js
pubg.getPlayers({ids: ['account.1', 'account.2']})
.then(players =>
{
  players.forEach(el => console.log(el.name))
})

```

Get single account by id
```js
pubg.getPlayer('account.id')
.then(pl =>
{
  console.log(pl.name)
})

```
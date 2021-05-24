const request = require('request')

request({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'ni6s78fu4ns355ce93fkkx8tiqesga'
  }
},
(error, response, body) => {
  if (error) {
    console.log(error)
    return
  }
  let obj
  try {
    obj = JSON.parse(body)
  } catch (error) {
    console.log(error)
  }
  const topGameList = obj.top
  for (let i = 0; i < topGameList.length; i++) {
    const item = topGameList[i]
    console.log(`${item.viewers} ${item.game.name}`)
  }
}
)

// name capital currencies.code callingCodes

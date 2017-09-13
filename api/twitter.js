if (process.env.NODE_ENV !== "production") {
	require('dotenv').config()
}
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'bkfGlSYdkMSeAjPf0Y8i2jqdF',
  consumer_secret:      'PiqeH4ebySXtdGEQIDKSNNQErtdpJIa1h7nhcZu2Sg6UqhUDrx',
  access_token:         '747775564006686720-B5aEjXhGW0IqEX6Jjf3h6nwAmLjHIFr',
  access_token_secret:  'vUfhGuL7WDQkbotpZkSIudDGbPRIhYLyA9n9es7DLa1Ib',
  timeout_ms:           60 * 1000
})

module.exports = T

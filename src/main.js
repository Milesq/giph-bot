require('dotenv').config()
const { DISCORD_TOKEN, GIPHY_TOKEN } = process.env

const Discord = require('discord.js')
const giphy = require('giphy-api')(GIPHY_TOKEN)
const bot = new Discord.Client()

const HELP_MSG = `UPPERCASSED message - gif
RD - random gif
HELP ME GIF BOT - this help message`

const rdMax = max => Math.floor(Math.random() * max)

bot.login(DISCORD_TOKEN)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', async msg => {
  const { content } = msg

  if (content === 'HELP ME GIF BOT') {
    return msg.reply(HELP_MSG)
  }

  if (content === 'RD') {
    const {
      data: { embed_url },
    } = await giphy.random()

    return msg.reply(embed_url)
  }

  if (content.toLocaleUpperCase('pl') === content) {
    const { data: gifs } = await giphy.search(content)

    if (!gifs.length) {
      return msg.reply('cannot find gif :(')
    }

    msg.channel.send(gifs[rdMax(gifs.length)].embed_url)
  }
})

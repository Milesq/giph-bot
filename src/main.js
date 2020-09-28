require('dotenv').config()
const Discord = require('discord.js')
const gifSearch = require('gif-search')
const bot = new Discord.Client()
const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', async msg => {
  const { content } = msg

  if (content.toLocaleUpperCase('pl') === content) {
    const gifUrl = await gifSearch.query(content)

    msg.channel.send(gifUrl)
  }
})

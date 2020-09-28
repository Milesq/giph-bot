require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', msg => {
  const { content } = msg

  if (content.toLocaleUpperCase('pl') === content) {
    msg.channel.send('pong')
  }
})

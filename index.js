const Discord = require("discord.js")
require("dotenv").config

const client = new Discord.Client({
    intents: [
       "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: ",",
    owners: [684560921020203053]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

module.exports = bot

//client.on("ready", () => {
//    console.log(`Logged in as ${client.user.tag}`)
//})
//
//client.on("messageCreate", (message) => {
//    if (message.content == "hi"){
//        message.reply("Hai :3")
//    }
//})

client.login(process.env.TOKEN)
DisTube = require('distube')

module.exports = {
    name: "skip",
    aliases: ["s"],
    description: "play song",
    execute: async (client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send("Please join voice channel first")
        client.distube.skip(message)
        message.channel.send("Skipped song")
    }
}
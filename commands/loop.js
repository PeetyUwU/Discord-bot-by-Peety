DisTube = require('distube')

module.exports = {
    name: "loop",
    aliases: ["l"],
    description: "play song",
    execute: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Please join voice channel first")
        client.distube.setRepeatMode(message, parseInt(args[0]));
        message.channel.send("***Looping***" || "***Not looping***")
    }
}
DisTube = require('distube')

module.exports = {
    name: "play",
    aliases: ["p", "pl"],
    description: "play song",
    execute: async (client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send("Please join voice channel first")
        
        const music = args.join(" ")
        if(!music) return message.channel.send("Please provide a song")
        
        await client.distube.play(message, music);
        
        
        }
    }
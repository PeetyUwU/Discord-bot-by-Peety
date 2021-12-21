DisTube = require('distube')

module.exports = {
    name: "search",
    aliases: ["srch", "sr"],
    description: "play song",
    execute: async (client, message, args) => {
        client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });
        if(!message.member.voice.channel) return message.channel.send("Please join voice channel first")
        
        const music = args.join(" ")

        client.distube.play(message, music)
        
        }
    }
module.exports = {
    name: "play",
    aliases: ["p", "pl"],
    description: "play song",
    execute: async (client, message, args) => {
        const {
            DisTube
        } = require("distube")
        const distube = new DisTube(client, {
            searchSongs: 0,
            emitNewSongOnly: true
        })
        if (!message.member.voice.channel) return message.channel.send("Please join voice channel first")

        const music = args.join(" ")
        if (!music) return message.channel.send("Please provide a song")

        distube.play(message, music);


    }
}
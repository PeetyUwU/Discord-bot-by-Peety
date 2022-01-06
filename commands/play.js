

module.exports = {
    name: "play",
    aliases: ["p", "pl"],
    description: "play song",
    execute: async (client, message, args, Discord) => {
        const DisTube = require("distube")
        const distube = new DisTube(client, {
            leaveOnStop: false,
            emitNewSongOnly: true,
        })
        if (!message.member.voice.channel) return message.channel.send("Please join voice channel first")

        const music = args.join(" ")
        if (!music) return message.channel.send("Please provide a song")
        client.distube.play(message, music);


        distube
            .on("addSong", (queue, song) => {
                message.channel.send(`**<:4186_IrizchuComfy:809424032595312640> ⁓ Playing now:** ${song.name}\` - \`${song.formattedDuration}\``)
            })
        //.on("playSong", (message, queue, song) => queue.channel.send(`**<:4186_IrizchuComfy:809424032595312640> ⁓ Playing now:** ${song.name}\` - \`${song.formattedDuration}\``))


    }
}
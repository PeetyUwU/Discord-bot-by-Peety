DisTube = require('distube')

module.exports = {
    name: "queue",
    aliases: ["q"],
    description: "play song",
    execute: async (client, message, args) => {
        
        if(!message.member.voice.channel) return message.channel.send("Please join voice channel first")
            let queue = client.distube.getQueue(message);
            message.channel.send(`**<:4186_IrizchuComfy:809424032595312640> ⁓ Current queue**:
            > ` + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).slice(0, 10).join("\n"));
    }
}
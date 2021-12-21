
DisTube = require('distube')

module.exports = {
    name: "filter",
    aliases: ["f"],
    description: "play song",
    execute: async (client, message, args) => {
        const command = args.shift();
        if(!message.member.voice.channel) return message.channel.send("Please join voice channel first")
        if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
            let filter = client.distube.setFilter(message, command);
            message.channel.send(`**<:4186_IrizchuComfy:809424032595312640> ⁓ Added filter: **
            > ` + (filter || "off"));
          }
          else{
            message.channel.send("filters: 3d, bassboost, echo, karaoke, nightcore, vaporwave (write the same filter again to turn it off)")
          }
        }
    }    
    
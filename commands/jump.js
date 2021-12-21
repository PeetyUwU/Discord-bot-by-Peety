
DisTube = require('distube')

module.exports = {
    name: "jump",
    aliases: ["j"],
    description: "play song",
    execute: async (client, message, args) => {
        const number = parseInt(args[0]) - 1
        if(number <= 0) {
            message.channel.send("the number need's to be bigger than 1")
            return
        }
        if(isNaN(number) && !number === undefined){
            message.channel.send("please enter number")
        }
        else{
        client.distube.jump(message, number)
        message.channel.send(`Jumping to ` + (args[0] || " next song"))
            }
        }
    }    
    
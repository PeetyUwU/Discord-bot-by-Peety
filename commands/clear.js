const { Message } = require("discord.js");

module.exports = {
    name:"clear",
    aliases: ["purge"],
    description: "Clear messages",
    async execute(client, message, args, Discord){   
        if(message.member.hasPermission("MANAGE_MESSAGES") || message.author.id === "676503697252941856"){

            if(!args[0]) return message.reply("please enter number");
        if(isNaN(args[0])) return message.reply("please enter number");
        if(args[0] > 100) return message.reply("I can't delete more than 100 messages");
        if(args[0] < 1) return message.reply("the number need's to be bigger than 1");
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            console.log("Cleard " + args);
        })
    }
    else {
        message.channel.send("Don't even think about it")
    }
    }
        }
            

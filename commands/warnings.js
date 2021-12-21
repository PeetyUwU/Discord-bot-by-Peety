const fs = require("fs");
const { send } = require("process");

module.exports = {
    name: "warnings",
    aliases: [],
    description: "warnings",
    async execute(client, message, args, Discord){
        const JSON_FILE = "./database/warn.json"
        let argsWithoutMentions = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
        const target = message.mentions.users.first();
        if(!target) { 
            message.channel.send("You didn't mentioned anyone") 
            return
        }

        let response = await JSON.parse(fs.readFileSync(JSON_FILE))
        
        let guildId = message.guild.id
        let ID = response.filter(w => w.id === target.id && w.server === guildId)
        console.log(ID)
    
        for(i=0; i<ID.length; i++) {
            let dt = new Date(ID[i].date)
            message.channel.send(`User: <@${ID[i].id}> reason: ${ID[i].reason} warned by: <@${ID[i].author}> date: ${dt.toLocaleString()} `)
        }


    }
}


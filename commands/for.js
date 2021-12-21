const fs = require("fs")

module.exports = {
    name: "for",
    aliases: [],
    description: "play song",
    execute: async (client, message, args) => {
        const JSON_FILE = "./database/warn.json"

        let response = await JSON.parse(fs.readFileSync(JSON_FILE))
        
        const target = message.mentions.users.first();
        let guildId = message.guild.id
        
        
        for(let item in response) {
            console.log("hi")
        }
        
        
    }
}
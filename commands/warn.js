const fs = require("fs");

module.exports = {
    name: "warn",
    aliases: [],
    description: "warn",
    async execute(client, message, args, Discord){
        try {
        const JSON_FILE = "./database/warn.json"
        let argsWithoutMentions = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
        const target = message.mentions.users.first();
        if(!target) { 
            message.channel.send("You didn't mentioned anyone") 
            return
        }
        
        let warning = [];
        if(fs.existsSync(JSON_FILE)) {
            warning = JSON.parse(fs.readFileSync(JSON_FILE))
        }
        let w = {};
        w.date = Date.now()
        w.reason = argsWithoutMentions.join(" ")
        w.id = target.id
        w.author = message.author.id
        w.server = message.guild.id
        warning.push(w)

        fs.writeFileSync(JSON_FILE, JSON.stringify(warning, null, 2))

        message.channel.send(`${target} was warned for: ${w.reason}`)
        }
        catch(err) {
            message.channel.send("There was an error: " + err)
        }
    }
}
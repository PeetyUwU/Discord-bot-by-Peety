const fs = require("fs");

module.exports = {
    name: "warn",
    aliases: [],
    description: "warn",
    async execute(client, message, args, Discord){
        try {
        const JSON_FILE = "./database/warn.json"
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
        w.reason = args.slice(1).join(' ') || "no reason"
        w.id = target.id
        w.author = message.author.id
        w.server = message.guild.id
        w.warnId = Math.random().toString(36).substr(2) + "-" + Math.random().toString(36).substr(2) + "." + Math.random().toString(36).substr(2)
        warning.push(w)

        fs.writeFileSync(JSON_FILE, JSON.stringify(warning, null, 2))

        message.channel.send(`${target} was warned for: ${w.reason}`)
        }
        catch(err) {
            message.channel.send("There was an error: " + err)
        }
    }
}
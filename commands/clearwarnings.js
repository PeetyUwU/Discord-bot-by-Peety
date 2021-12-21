const fs = require("fs");
const {
    send
} = require("process");

module.exports = {
    name: "cw",
    aliases: [],
    description: "warnings",
    async execute(client, message, args, Discord) {
        const JSON_FILE = "./database/warn.json"
        let argsWithoutMentions = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
        const target = message.mentions.users.first();
        if (!target) {
            message.channel.send("You didn't mentioned anyone")
            return
        }

        let response = await JSON.parse(fs.readFileSync(JSON_FILE))

        let x = []
        let guildId = message.guild.id
        let IDs = response.filter(w => w.server === guildId)
        let g = response.filter(w => w.server !== guildId)
        let ID = IDs.filter(w => w.id !== target.id)
        x.push(ID, g)



        fs.writeFileSync(JSON_FILE, JSON.stringify(x, null, 2))
        message.channel.send(`Cleared all warnings for ${target}`)




    }
}
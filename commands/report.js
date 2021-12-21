module.exports = {
    name: "report",
    aliases: [],
    description: "report",
    async execute(client, message, args, Discord){
        try {
       let author = message.author
       let mention = message.mentions.users.first();
       const memberTarget = message.guild.members.cache.get(mention.id);
       let ch = message.guild.channels.cache.find(i => i.id === "900067385334173796")
       let argsWithoutMentions = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));

       
       ch.send(author.tag+` reported: ${memberTarget} for: ${argsWithoutMentions.join(" ")}`)
        }
        catch(err) {
            message.channel.send("There was an error: "+err)
        }
    }
}
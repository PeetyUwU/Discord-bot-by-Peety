module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args) {
        if (message.member.hasPermission("KICK_MEMBERS") || message.author.id === "676503697252941856") {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                if (memberTarget.hasPermission("ADMINISTRATOR")) {
                    message.channel.send("Can't kick admins") 
                    return
                }
                message.channel.send(`${target.username} has been kicked`);
                memberTarget.kick();
                console.log("Kicked " + target.tag);
            } else {
                message.channel.send(`You can't kick that member!`);
            }
        } else {
            message.channel.send("Don't even think about it")
        }
    }
}
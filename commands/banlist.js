module.exports = {
    name: "banlist",
    aliases: ["bl"],
    description: "Ban list",
    execute(client, message, args, Discord) {
        message.guild.fetchBans()
            .then(banned => {
                let list = banned.map(user => user.user.tag + " for reason: " + user.reason).join("\n");

                // Make sure if the list is too long to fit in one message, you cut it off appropriately.
                if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;

                if(list.length == 1) {
                    message.channel.send(`**${banned.size} user is banned:**\n${list}`)
                }
                message.channel.send(`**${banned.size} users are banned:**\n${list}`);
            })
            .catch(console.error);
    }
}
module.exports = {
    name: "direct",
    description: "Dm a user",
    run: async (client, bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You don't have permissions");

        let user = message.mentions.members.first() || message.guild.members.chache.get(args[0]);

        if (!user) return message.channel.send("You didn't mention a user");

        if (!args.slice(1).join(" ")) return message.channel.send("You didn't write your message");

        user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("Can't do that"))
        console.log("DM" + user);
    }
}
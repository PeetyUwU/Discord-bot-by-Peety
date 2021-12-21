module.exports = {
    name: "invite",
    aliases: [],
    description: "invite link",
    execute(client, message, args, Discord) {
        let channelEmbed = new Discord.MessageEmbed()
            .setColor(0xFF1100)
            .setTitle(`click here for invite link`)
            .setDescription("Nya<3")
            .setURL("https://discord.com/oauth2/authorize?client_id=811205997540016148&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D811205997540016148%26permissions%3D8%26scope%3Dbot&scope=bot")
            .setImage("https://i1.wp.com/wallpaperaccess.com/full/252467.jpg")

            message.channel.send(channelEmbed)
    }
}
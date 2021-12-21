const { Message } = require("discord.js")

module.exports = {
    name: "help2",
    aliases: [],
    description: "Embed",
    execute(client, message, args, Discord) {
        const Embed = new Discord.MessageEmbed()
        .setColor(0xFF1100)
        .setTitle("Commands")
        .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
        .setDescription("List of commands")
        .addFields(
            {name: "Command22", value: "filter     filters: 3d, bassboost, echo, karaoke, nightcore, vaporwave"},
            {name: "Command23", value: "wallpaper"},
            {name: "Command24", value: "waifu"},
            {name: "Command25", value: "testnsfw"},
            {name: "Command26", value: "OwO"},
            {name: "Command27", value: "warn @user"},
            {name: "Command28", value: "warnings @user"},

        )
        .setImage("https://wallpaper.dog/large/6721.jpg")
        .setFooter("Made by Peety#1083")
        message.author.send(Embed)
        console.log("help command used"/*, ${}*/)
    }
}
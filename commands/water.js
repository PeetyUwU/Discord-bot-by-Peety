module.exports = {
    name: "water",
    aliases: [],
    description: "water",
    execute: async (client, message, args, Discord) => {

        

        const EMBED = new Discord.MessageEmbed()
            .setColor(0xFF1100)
            .setTitle(`Warnings`)
            .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
            .setDescription(`Water`)
            .setImage("https://cdn.hswstatic.com/gif/water-update.jpg")
            .setTimestamp()
            .setFooter("Made by Peety Wild Nya~(lonely gang)#7721")
        message.channel.send(EMBED);
    }
}
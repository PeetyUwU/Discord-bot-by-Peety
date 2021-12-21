const { Message } = require("discord.js")

module.exports = {
    name: "help",
    description: "Embed",
    execute(client, message, args, Discord) {
        const Embed = new Discord.MessageEmbed()
        .setColor(0xFF1100)
        .setTitle("Commands")
        .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
        .setDescription("List of commands")
        .addFields(
            {name: "Command1", value: "help"}, 
            {name: "Command2", value: "kick      ex. ;kick @Peety#1083"}, 
            {name: "Command3", value: "ban       ex. ;ban @Peety#1083"}, 
            {name: "Command4", value: "clear     ex. ;clear 100"}, 
            {name: "Command5", value: "cuddle"},
            {name: "Command6", value: "mute       ex. ;mute @Peety#1083 10s or ;mute @Peety#1083"},
            {name: "Command7", value: "unmute     ex. ;unmute @Peety#1083"},
            {name: "Command8", value: "ahoj"},
            {name: "Command9", value: "play      ex. ;play Nightcore"},
            {name: "Command10",value: "stop"},
            {name: "Command11",value: "sad"},
            {name: "Command12",value: "smile"},
            {name: "Command13",value: "kiss        ex. ;kiss or ;kiss @Peety#1083"},
            {name: "Command14",value: "gn"},
            {name: "Command15",value: "pat        ex. ;pat or ;pat @Peety#1083"},
            {name: "Command16",value: "bite        ex. ;bite or ;bite @Peety#1083"},
            {name: "Command17",value: "play"},
            {name: "Command18",value: "loop"},
            {name: "Command19",value: "queue"},
            {name: "Command20",value: "skip"},
            {name: "Command21",value: "help2"},

        )
        .setImage("https://wallpaper.dog/large/6721.jpg")
        .setFooter("Made by Peety#1083")
        message.author.send(Embed)
        console.log("help command used"/*, ${}*/)
        //sad:   https://media1.tenor.com/images/76d6d1ab30252270844689d3e9dc3214/tenor.gif?itemid=14495462
        //Mei Misaki https://wallup.net/wp-content/uploads/2016/03/12/299905-Another-Misaki_Mei.jpg
    }
    
}
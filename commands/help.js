const {
    Message
} = require("discord.js")

module.exports = {
    name: "help",
    description: "Embed",
    execute(client, message, args, Discord) {
        const Embed = new Discord.MessageEmbed()
            .setColor(0xFF1100)
            .setTitle("Commands")
            .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
            .setDescription(`List of commands
        <means that you have to use it> (means that it's optional) {aliases}
        help
        kick <mention>
        ban <mention>
        clear <number from 1 to 100> {cl}
        cuddle
        mute <mention> (10s/10m/10h)
        unmute <mention>
        hi {hello}
        play <song name> {pl, p}
        stop
        sad
        smile
        kiss <mention/text>
        gn {goodnight}
        pat <mention/text>
        bite <mention/text>
        loop
        queue
        skip
        filter <filters: 3d, bassboost, echo, karaoke, nightcore, vaporwave>
        wallpaper
        waifu
        testnsfw
        owo
        warn <mention> (reason)
        warnings <mention> {wr}
        clearwarning <mention> <warning id> {cw}
        clearwarnall <mention> {cwa}
        warningsall {warnings, wra}`)
            .setThumbnail("https://i.imgur.com/qRFFT4T.jpg")
            .setFooter("Made by Peety#1083")
        message.author.send(Embed)
        console.log("help command used" /*, ${}*/ )
        //sad:   https://media1.tenor.com/images/76d6d1ab30252270844689d3e9dc3214/tenor.gif?itemid=14495462
        //Mei Misaki https://wallup.net/wp-content/uploads/2016/03/12/299905-Another-Misaki_Mei.jpg
    }

}
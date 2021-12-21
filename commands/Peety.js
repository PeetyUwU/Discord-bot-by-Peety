module.exports = {
    name: "Peety",
    description: "Easter egg",
    execute(client, message, args, Discord){
        message.channel.bulkDelete(1);
        const Embed = new Discord.MessageEmbed()
        .setColor(0xFF1100)
        .setTitle("Peety")
        .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
        .setDescription("You found ester egg")
        .addFields()
        .setImage("https://wallup.net/wp-content/uploads/2016/03/12/299905-Another-Misaki_Mei.jpg")
        .setFooter("Made by Peety#1083")
        message.author.send(Embed)
        console.log("Peety command used"/*, ${}*/)
        //sad:   https://media1.tenor.com/images/76d6d1ab30252270844689d3e9dc3214/tenor.gif?itemid=14495462
        //Mei Misaki https://wallup.net/wp-content/uploads/2016/03/12/299905-Another-Misaki_Mei.jpg
    }
}

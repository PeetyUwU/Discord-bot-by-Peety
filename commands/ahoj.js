module.exports = {
    name: "ahoj",
    aliases: ["hi", "hello"],
    description: "Embed",
    execute(client, message, args, Discord) {
        try {
            let random = Math.floor(Math.random() * 10);
            console.log(random)
            message.channel.bulkDelete(1);
            let image

            if (random < 5 && random >= 0) {
                image = "https://media1.tenor.com/images/b5397d5803883e7d4a4b355d068a7375/tenor.gif?itemid=14223397"
                //sad:   https://media1.tenor.com/images/76d6d1ab30252270844689d3e9dc3214/tenor.gif?itemid=14495462
                //Mei Misaki https://wallup.net/wp-content/uploads/2016/03/12/299905-Another-Misaki_Mei.jpg
            } else if (random <= 10 && random >= 5) {
                image = "https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif?itemid=8807701"
                //sad:   https://media1.tenor.com/images/76d6d1ab30252270844689d3e9dc3214/tenor.gif?itemid=14495462
                //Mei Misaki https://wallup.net/wp-content/uploads/2016/03/12/299905-Another-Misaki_Mei.jpg

            }
            const Embed = new Discord.MessageEmbed()
                .setColor(0xFF1100)
                .setTitle(`Hi ${message.author.username}`)
                .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
                .setDescription(" ")
                .addFields()
                .setImage(image)
                .setFooter("Made by Peety#1083")
            message.channel.send(Embed)
            console.log("Ahoj command used" /*, ${}*/ )
        } catch (err) {
            message.channel.send("There was error please report it to Peety Wild Nya~#7721")
        }
    }
}
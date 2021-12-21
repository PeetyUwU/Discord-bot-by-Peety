const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: "wallpaper",
    aliases: ["wp"],
    description: "wallpaper",
    execute(client, message, args, Discord){
      const Embed = new Discord.MessageEmbed()
      const user = message.member.user
      if (message.channel.nsfw) {
       async function work() {
  let GIF = await neko.sfw.wallpaper();
  Embed
  .setColor(0xFF1100)
  .setTitle(" ")
  .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
  .setDescription(`Wallpaper`)
  .addFields()
  .setImage(GIF.url)
  .setFooter("Bot made by Peety#1083")
  message.channel.send(Embed)
console.log("wallpaper Used")
}
work();
    }
    else {
        message.channel.send("Sorry but this is nsfw command")
    }



        }
      }
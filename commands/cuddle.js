const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: "cuddle",
    description: "anime kiss gif",
    execute(client, message, args, Discord){
      const Embed = new Discord.MessageEmbed()
      const user = message.member.user
 
async function work() {
  let GIF = await neko.sfw.cuddle();
  Embed
  .setColor(0xFF1100)
  .setTitle(" ")
  .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
  .setDescription(`${user.username} cuddles ${args.join(" ")}`)
  .addFields()
  .setImage(GIF.url)
  .setFooter("Bot made by Peety#1083")
  message.channel.send(Embed)
console.log("cuddle Used")
}
work();

        }
      }
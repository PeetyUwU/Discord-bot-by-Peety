const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: "test",
    description: "anime hug gif",
    execute(client, message, args, Discord){
        if (message.channel.nsfw) {
            const Embed = new Discord.MessageEmbed()
      const user = message.member.user
 
async function work() {
  let GIF = await neko.sfw.OwOify({text: args.join(" ")});
  Embed
  .setColor(0xFF1100)
  .setTitle()
  .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
  .setDescription(GIF)
  .addFields()
  .setImage()
  .setFooter("Bot made by Peety#1083")
  message.channel.send(Embed)
console.log(GIF)
}work();
        }
        

      

        }
      }
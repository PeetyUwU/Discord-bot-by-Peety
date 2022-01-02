const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: "fuck",
    description: "anime hug gif",
    execute(client, message, args, Discord){
        if (message.channel.nsfw) {
            const Embed = new Discord.MessageEmbed()
      const user = message.member.user
 
async function work() {
  let GIF = await neko.nsfw.classic();
  Embed
  .setColor(0xFF1100)
  .setTitle(" ")
  .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
  .setDescription(`${user.username} fucks ${args.join(" ")}`)
  .addFields()
  .setImage(GIF.url)
  .setFooter("Bot made by Peety#1083")
  message.react("<:4186_IrizchuComfy:809424032595312640>")
  message.channel.send(Embed)
  
console.log("Kiss Used")
}
work();
        } else {
            message.channel.send("This channel is NSFW command.");
        }

      

        }
      }
module.exports = {
    name: "roleschose",
    aliases: [],
    description: "Embed",
    async execute(client, message, args, Discord) {
        const embed = new Discord.MessageEmbed()
const channel = "812411763806568479"
const test1 = message.guild.roles.cache.find(role => role.name === "Girl")
const test2 = message.guild.roles.cache.find(role => role.name === "Boi")

const test1emoji = "<:4186_IrizchuComfy:809424032595312640>"
const test2emoji = "<a:514909342617829376:821325821271867453>"

embed
.setColor(0xff1100)
.setTitle("chose")
.setDescription("Chose a role!\n\n"
    + `${test1emoji} for Girl\n`
    + `${test2emoji} for Boy`)

    let messageEmbed = await message.channel.send(embed)
    messageEmbed.react(test1emoji)
    messageEmbed.react(test2emoji)

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === test1emoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(test1);
            }
            if (reaction.emoji.name === test2emoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(test2);
            }
        } else {
            return;
        }

    });
    client.on('messageReactionRemove', async (reaction, user) => {
 
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;


        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === test1emoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(test1);
            }
            if (reaction.emoji.name === test2emoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(test2);
            }
        } else {
            return;
        }
    });
    }
}




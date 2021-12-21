module.exports = {
    name: 'role',
    aliases: [],
    description: 'stop the bot and leave the channel',
    execute: async (client, message, args) => {
        if(message.author.id === "676503697252941856") {
            const target = message.mentions.users.first();
            if(!target) return message.channel.send("Please specify someone to give a role to")
            args.shift()
            const choserole = args.join(" ")
            const { guild } = message
            const member = guild.members.cache.get(target.id)
            const role = guild.roles.cache.find((role) => {
                return role.name === choserole
            })
            if(!role) return message.channel.send(`There is no role with the name ***${choserole}***`)
            member.roles.add(role)
            message.reply(`***${target.tag}*** now has the role ***${choserole}***`)
            }
            else return
        }
    }
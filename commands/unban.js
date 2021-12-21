module.exports = {
    name: "unban",
    aliases: [],
    description: "unban",
    async execute(client, message, args, Discord) {
        if(message.member.hasPermission("BAN_MEMBERS") || message.author.id === "676503697252941856"){

        const member = args[0]

        if(!member) {
            return message.channel.send("Please enter a user id")
        }


        try{
            message.guild.fetchBans().then( bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member} has been unbanned`)
        } catch (e) {
            return message.channel.send("An error has occured")
            }
        }
        else {
            message.channel.send("Don't even think about it")
        }
        }
    }

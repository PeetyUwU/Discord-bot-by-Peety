module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, args){
        if(message.member.hasPermission("BAN_MEMBERS") || message.author.id === "676503697252941856"){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            if(memberTarget.hasPermission("ADMINISTRATOR")){
                message.channel.send("Can't ban admins")
                return
            }
            message.channel.send(`${target.username} has been banned`);
            memberTarget.ban();
                        
                        console.log("Banned " + target.tag);
        }
        else
        {
            message.channel.send(`You coudn't ban that member!`);
        }
    }
    else {
        message.channel.send("Don't even think about it")
    }
    }
}

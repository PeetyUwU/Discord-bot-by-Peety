module.exports = {
    name: "unmute",
    description: "This unmutes a member",
    execute(client, message, args, Discord){
        try {
        if(message.member.hasPermission("MUTE_MEMBERS") || message.author.id === "676503697252941856"){

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === "Member");
            let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");

            const memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`) 
        }
        else{
            message.channel.send("Can't do that")
        }
    }
    else {
        message.channel.send("Don't even think about it")
    }
}
catch(err) {
    message.channel.send("There was an error please report this code (Err40) to Peety Wild Nya~#7721")
}
    }
}
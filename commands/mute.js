
const ms = require("ms");
module.exports = {
    name: "mute",
    description: "This mutes a member",
    execute(client, message, args, Discord){
        try {
        if(message.member.hasPermission("MUTE_MEMBERS") || message.author.id === "676503697252941856") {

        const target = message.mentions.users.first();
        if(target){
            let mainrole = message.guild.roles.cache.find(role => role.name === "Member" ||role.name === "member" || role.name === "members" || role.name === "Members" || role.name === "Místní");

            if(!mainrole) return message.reply("Please create Member role")

            let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
            const memberTarget = message.guild.members.cache.get(target.id);

            if(muterole){
                if(!args[1]){
                    memberTarget.roles.add(muterole.id);
                    memberTarget.roles.remove(mainrole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`)
                    return
                    }
                    if(args[1] === "reason"){
                        memberTarget.roles.add(muterole.id);
                        memberTarget.roles.remove(mainrole.id);
                        message.channel.send(`<@${memberTarget.user.id}> has been muted reason ${args[2]}`)
                        return
                    }
                    if(args[2]){
                    memberTarget.roles.add(muterole.id);
                    memberTarget.roles.remove(mainrole.id); 
                    message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))} reason ${args[2]}`)
                    setTimeout(function(){
                    memberTarget.roles.remove(muterole.id);
                    memberTarget.roles.add(mainrole.id);
                    }, ms(args[1]));}
                    else{
                        memberTarget.roles.add(muterole.id);
                    memberTarget.roles.remove(mainrole.id); 
                    message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
                    setTimeout(function(){
                    memberTarget.roles.remove(muterole.id);
                    memberTarget.roles.add(mainrole.id);
                    }, ms(args[1]));}
            }
            if(mainrole){

            }
            else{
                message.channel.send("Please create main role")
            }
                    
            
            
                //   message.reply("mute role was created use command again")
            

            
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
    message.channel.send(err)
}
    }
}


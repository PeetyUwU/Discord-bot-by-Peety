const ms = require("ms");

module.exports = {
    name: "restart",
    description: "restart",
    execute(client, message, args, Discord){
        if(message.author.id === "676503697252941856") {
        message.channel.send("Restarting")
console.log("Shutdown command used")      
setTimeout(function(){
    process.exit()
}, ms(1000))
        }
        else {
            message.reply("If you have any problem please contact bot owner: Peety Wild Nya~#7721")
        }
}
}

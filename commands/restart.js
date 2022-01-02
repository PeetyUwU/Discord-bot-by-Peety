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
            message.reply("Don't even think about it")
        }
}
}

module.exports = {
    name: "785522",
    description: "anime kiss gif",
    execute(client, message, args, Discord){
        if(message.author.id === "676503697252941856") {
            message.channel.bulkDelete(1);
        message.channel.send("Shutting down...").then(() => {
            client.destroy();
        })}
        else {
            message.reply("This is testing command only for developer")
        }
    }
}

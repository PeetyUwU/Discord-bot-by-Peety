module.exports = {
    name: "shutdown",
    description: "anime kiss gif",
    execute(client, message, args, Discord) {
        if (message.author.id === "676503697252941856") {
            message.channel.bulkDelete(1);
            message.channel.send("Shutting down...").then(() => {
                client.destroy();
            })
        } else {
            message.reply("Don't even think about it")
        }
    }
}
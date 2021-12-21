module.exports = {
    name: "testnsfw",
    aliases: ["nsfw"],
    description: "testnsfw",
    execute(client, message, args, Discord){
if (message.channel.nsfw) {
    message.channel.send("This channel is NSFW.");
} else {
    message.channel.send("This channel is SFW.");
}
    }
}
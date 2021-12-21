module.exports = {
    name: "reload",
    description: "reload",
    execute(client, message, args, Discord ){
        if(!args[0]) return message.channel.send("Please provide a command to reload!")

        let commandName = args[0].toLowerCase()

        try {
            delete require.cache[require.resolve(`./${commandName}.js`)]
            client.commands.delete(commandName)
            const pull = require(`./${commandName}.js`)
            client.commands.set(commandName, pull)
        } catch(e) {
            return message.channel.send(`Could not reload: \`${args[0].toLowerCase()}\``)
        }
    message.channel.send(`The command ***${args[0].toLowerCase()}*** has been reloaded!`)
    }
}

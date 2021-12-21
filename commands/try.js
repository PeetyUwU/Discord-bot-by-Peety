const { kill } = require("process")

module.exports = {
    name: "try",
    aliases: [],
    description: "testnsfw",
    async execute(client, message, args, Discord){
        try {
            const questions = [
                "What is your name?",
                "Where are you from?",
                "How are you?"
            ]

            let counter = 0

            const filter = (m) => m.author.id === message.author.id

            const collector = new Discord.MessageCollector(message.channel, filter, {
                max: questions.length,
                time: 1000 * 15
            })

            message.channel.send(questions[counter++])
            collector.on("collect", m => {
                if (counter < questions.length) {
                    m.channel.send(questions[counter++])
                }
            })

            collector.on("end", (collected) => {
                console.log(`collected ${collected.size} messages`)
                message.channel.send("Done")

                let counter = 0
                collected.forEach((value) => {
                    console.log(questions[counter++], value.content)
                })
            })
           
            
        }
        catch(err) {
            message.channel.send("There was an error: "+err)
        }
    }
}
DisTube = require('distube');
module.exports = {
	name: 'leave',
	aliases: ['stop'],
	description: 'stop the bot and leave the channel',
	execute: async (client, message, args) => {
		if (!message.member.voice.channel)
			return message.channel.send('Please join voice channel first');
		client.distube.stop(message);
		message.member.voice.channel.leave();
		message.channel.send(
			`**<:4186_IrizchuComfy:809424032595312640> ⁓ Stopped the music!** > If you want me to rejoin, type ;play.`
		);
	},
};

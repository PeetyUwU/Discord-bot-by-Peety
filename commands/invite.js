module.exports = {
	name: 'invite',
	aliases: [],
	description: 'invite link',
	execute(client, message, args, Discord) {
		let channelEmbed = new Discord.MessageEmbed()
			.setColor(0xff1100)
			.setTitle(`click here for invite link`)
			.setDescription('Nya<3')
			.setURL(
				'https://discord.com/api/oauth2/authorize?client_id=811205997540016148&permissions=8&scope=applications.commands%20bot'
			)
			.setImage('https://i1.wp.com/wallpaperaccess.com/full/252467.jpg');

		message.channel.send(channelEmbed);
	},
};

const client = require('nekos.life');
const neko = new client();

module.exports = {
	name: 'kill',
	aliases: [],
	description: '',
	execute(client, message, args, Discord) {
		const Embed = new Discord.MessageEmbed();
		const user = message.member.user;
		let Images = '';
		let number = Math.round(Math.random() * 10);
		if (number == 0) {
			Images =
				'https://tenor.com/view/milk-and-mocha-bear-couple-bear-hug-kick-shut-up-gif-17443923';
		}
		if (number == 1) {
			Images =
				'https://tenor.com/view/killed-em-hold-this-stabbed-gif-14017151';
		}
		if (number == 2) {
			Images = '';
		}
		if (number == 3) {
			Images = '';
		}
		if (number == 4) {
			Images = '';
		}
		if (number == 5) {
			Images = '';
		}
		if (number == 6) {
			Images = '';
		}
		if (number == 7) {
			Images = '';
		}
		if (number == 8) {
			Images = '';
		}
		if (number == 9) {
			Images = '';
		}
		if (number == 10) {
			Images = '';
		}

		async function work() {
			Embed.setColor(0xff1100)
				.setTitle(' ')
				.setURL(
					'https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg'
				)
				.setDescription(
					`<@${message.member.user.id}> kills ${args.join(' ')}`
				)
				.addFields()
				.setImage(Images)
				.setFooter('Bot made by Peety Wild Nya~(lonely gang)#7721');
			message.channel.send(Embed);
		}
		work();
	},
};

const fs = require('fs');

module.exports = {
	name: 'warning',
	aliases: ['wr'],
	description: 'list warnings for user',
	execute: async (client, message, args, Discord) => {
		if (
			!message.member.hasPermission('ADMINISTRATOR') ||
			!message.member.hasPermission({
				checkAdmin: false,
				checkOwner: false,
			})
		) {
			message.channel.send(
				'You do not have permission to use this command.'
			);
			return;
		}
		const JSON_FILE = './database/warn.json';

		let response = await JSON.parse(fs.readFileSync(JSON_FILE));

		const target = message.mentions.users.first();
		if (!target) {
			message.channel.send('Please mention user');
			return;
		}

		let index = 0;

		for (let item of response) {
			if (item.server == message.guild.id && target.id == item.id) {
				index++;
				let dt = new Date(item.date);
				const Embed = new Discord.MessageEmbed()
					.setColor(0xff1100)
					.setTitle(`Warnings`)
					.setURL(
						'https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg'
					)
					.setDescription(` `)
					.setThumbnail('https://i.imgur.com/qRFFT4T.jpg')
					.addFields(
						{
							name: 'User',
							value: `<@${item.id}>`,
						},
						{
							name: 'Reason',
							value: item.reason,
						},
						{
							name: 'Warned by',
							value: `<@${item.author}>`,
						},
						{
							name: 'Date',
							value: dt.toLocaleString(),
						},
						{
							name: 'Warn id',
							value: item.warnId,
						}
					)
					.setTimestamp()
					.setFooter('Made by Peety#1083');
				message.channel.send(Embed);
			}
		}
		if (index <= 0) {
			message.channel.send('There are no warings in this server');
		}
	},
};

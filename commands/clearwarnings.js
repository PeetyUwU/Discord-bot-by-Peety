const fs = require('fs');
const { send } = require('process');

module.exports = {
	name: 'clearwarnall',
	aliases: ['cwa'],
	description: 'warnings',
	async execute(client, message, args, Discord) {
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
		let argsWithoutMentions = args.filter(
			(arg) => !Discord.MessageMentions.USERS_PATTERN.test(arg)
		);
		const target = message.mentions.users.first();

		if (!target) {
			message.channel.send("You didn't mentioned anyone");
			return;
		}

		let response = await JSON.parse(fs.readFileSync(JSON_FILE));
		let uz2 = response.filter(
			(w) => w.id != target.id || w.server != message.guild.id
		);

		fs.writeFileSync(JSON_FILE, JSON.stringify(uz2, null, 2));
		message.channel.send(`Cleared all warnings for ${target}`);
	},
};

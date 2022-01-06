const fs = require('fs');
const { send } = require('process');

module.exports = {
	name: 'clearwarn',
	aliases: ['cw'],
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
		let id = args[1];
		if (!id) {
			message.channel.send('Please enter warning id');
			return;
		}

		if (!target) {
			message.channel.send("You didn't mentioned anyone");
			return;
		}

		let response = await JSON.parse(fs.readFileSync(JSON_FILE));
		let uz2 = response.filter((w) => w.server != message.guild.id);
		let uz3 = response.filter((w) => w.server == message.guild.id);
		let uz4 = [];
		for (let u of uz3) {
			if (u.warnId == id && u.id == target.id) continue;
			uz4.push(u);
		}

		let uz5 = [...uz2, ...uz4];

		// for(let u of uz3) {
		//     if(id != u.warnId) continue
		//     uz3 = uz3.filter(w => w.warnId != u.warnId)
		// }

		fs.writeFileSync(JSON_FILE, JSON.stringify(uz5, null, 2));
		message.channel.send(`Cleared warning(${id}) for ${target}`);
	},
};

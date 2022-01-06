const fs = require('fs');

function token() {
	return Math.random().toString(36).substr(2);
}

module.exports = {
	name: 'warn',
	aliases: [],
	description: 'warn',
	async execute(client, message, args, Discord) {
		try {
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
			const target = message.mentions.users.first();

			if (!target) {
				message.channel.send("You didn't mentioned anyone");
				return;
			}

			let warning = [];
			if (fs.existsSync(JSON_FILE)) {
				warning = JSON.parse(fs.readFileSync(JSON_FILE));
			}

			let w = {};
			w.date = Date.now();
			w.reason = args.slice(1).join(' ') || 'no reason';
			w.id = target.id;
			w.author = message.author.id;
			w.server = message.guild.id;
			w.warnId = token() + '-?&#' + token() + '.' + token();
			warning.push(w);

			fs.writeFileSync(JSON_FILE, JSON.stringify(warning, null, 2));

			message.channel.send(`${target} was warned for: ${w.reason}`);
		} catch (err) {
			message.channel.send('There was an error: ' + err);
		}
	},
};

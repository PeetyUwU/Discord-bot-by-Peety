//PREFIX JE ";" ping: <@811205997540016148>
//invite link: https://discord.com/oauth2/authorize?client_id=811205997540016148&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D811205997540016148%26permissions%3D8%26scope%3Dbot&scope=bot
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const slash = require('discord-slash-commands-v12');
const querystring = require('querystring');

const client = new Discord.Client({
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_VOICE_STATES',
		'GUILD_INTEGRATIONS',
	],
});

const prefix = ';';

const fs = require('fs');
const { ClientRequest } = require('http');

const memberCounter = require('./counters/member-counter');
const { url } = require('inspector');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach((handler) => {
	require(`./handlers/${handler}`)(client, Discord);
});

// distube

// client.distube = new DisTube(client, {
//     searchSongs: false,
//     emitNewSongOnly: true
// });
const DisTube = require('distube');
client.distube = new DisTube(client, {
	searchSongs: false,
	leaveOnEmpty: true,
	leaveOnStop: true,
	emptyCooldown: 10,
	emitNewSongOnly: true,
});

client.distube
	.on('playSong', (message, queue, song) =>
		message.channel.send(
			`**<:4186_IrizchuComfy:809424032595312640> ⁓ Playing now:** ${song.name}\` - \`${song.formattedDuration}\``
		)
	)
	.on('addSong', (message, queue, song) =>
		message.channel.send(
			`**<:4186_IrizchuComfy:809424032595312640> ⁓ Added: ** ${song.name} - \`${song.formattedDuration}\` **to the queue.**`
		)
	)
	.on('error', (message, e) => {
		console.error(e);
		message.channel.send('An error encountered: ' + e);
	})
	.on('playList', (message, queue, playlist, song) =>
		message.channel.send(
			`**<:miraimusic:828978156512739378> ⁓ Playing now:**``${song.name}\` - \`${song.formattedDuration}\``
		)
	)
	.on('addList', (message, queue, playlist) =>
		message.channel.send(
			`**<:miraimusic:828978156512739378> ⁓ Added: ** ${song.name} - \`${song.formattedDuration}\` **to the queue.**`
		)
	)
	// DisTubeOptions.searchSongs = true
	.on('searchResult', (message, result) => {
		let i = 0;
		message.channel.send(
			`**Choose an option from below**\n${result
				.map(
					(song) =>
						`**${++i}**. ${song.name} - \`${
							song.formattedDuration
						}\``
				)
				.join(
					'\n'
				)}\n*Enter anything else or wait 60 seconds to cancel*`
		);
	})
	.on('empty', (message) =>
		message.channel.send('Channel is empty. Leaving the channel')
	)
	// DisTubeOptions.searchSongs = true
	.on('searchCancel', (message) => message.channel.send(`Searching canceled`))
	.on('noRelated', (message) =>
		message.channel.send(
			"Can't find related video to play. Stop playing music."
		)
	);

client.on('guildCreate', (guild) => {
	let channeltoSend;
	guild.channels.cache.forEach((channel) => {
		if (
			channel.type === 'text' &&
			!channeltoSend &&
			channel.permissionsFor(guild.me).has('SEND_MESSAGES')
		)
			channeltoSend = channel;
	});
	if (!channeltoSend) return;

	let channelEmbed = new Discord.MessageEmbed()
		.setColor(0xff1100)
		.setAuthor(`Hi! Thank you for inviting me to ${guild.name}!`)
		.setDescription('Prefix is ";"')
		.addField('need help?', '*Write me on my discord: Peety Nya~#7721*');

	channeltoSend.send({ embeds: [channelEmbed] }).catch((e) => {
		if (e) {
			return;
		}
	});

	//    guild.roles.create({
	//         data: {
	//           name: 'Muted',
	//           color: 'BLACK',
	//           reason: 'Need mute role',
	//           permissions: ["SEND_MESSAGES"]
	//         },

	//       })
	const CHANNEL_FILE = './database/channel_file.json';

	guild.channels.create('Peety-bot-channels', {
		type: 'category',
		position: 0,
	});
	guild.channels.create('Peety-bot-updates', 'text').then((addChannel) => {
		const categoryId = guild.channels.cache.find(
			(c) => c.name === 'Peety-bot-channels'
		);
		addChannel.setParent(categoryId);

		let channelId = [];
		let x = {};
		x.channelId = addChannel.id;
		x.guild = guild.id;
		channelId.push(x);
		let file = JSON.parse(fs.readFileSync(CHANNEL_FILE));

		channelId = [x, ...file];

		fs.writeFileSync(CHANNEL_FILE, JSON.stringify(channelId, null, 2));
	});
});
const Canvas = require('canvas');
async function getCanvas(member) {
	let welcomeCanvas = {};
	welcomeCanvas.create = Canvas.createCanvas(1024, 500);
	welcomeCanvas.context = welcomeCanvas.create.getContext('2d');
	welcomeCanvas.context.font = '72px sans-serif';
	welcomeCanvas.context.fillStyle = '#ffffff';

	const backgroung = await Canvas.loadImage('./img/bg.jpg');
	welcomeCanvas.context.drawImage(backgroung, 0, 0);

	let canvas = welcomeCanvas;
	canvas.context.font = '42px sans-serif';
	canvas.context.textAlign = 'center';
	canvas.context.fillText(member.user.tag, 512, 410);
	canvas.context.font = '32px sans-serif';
	canvas.context.beginPath();
	canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true);
	canvas.context.closePath();
	canvas.context.clip();
	await Canvas.loadImage(
		member.user.displayAvatarURL({ format: 'png', size: 1024 })
	).then((img) => canvas.context.drawImage(img, 393, 47, 238, 238));
	let atta = new Discord.MessageAttachment(
		canvas.create.toBuffer(),
		`welcome-${member.user.id}.png`
	);
	try {
		let welcomeChannel = member.guild.channels.cache.find(
			(channel) =>
				channel.name === 'Welcome' ||
				channel.name === 'welcome' ||
				channel.id == '927651408159850516'
		);
		if (welcomeChannel) {
			welcomeChannel.send(
				`:wave: Hello <@${member.user.id}> welcome to **${member.guild.name}**`,
				atta
			);
		}
		if (!welcomeChannel) {
			let welcome;
			member.guild.channels.cache.forEach((channel) => {
				if (channel.type === 'text' && !welcome) welcome = channel;
			});
			welcome.send(
				`:wave: Hello <@${member.user.id}> welcome to **${member.guild.name}**`,
				atta
			);
		}
	} catch (e) {
		console.log(e);
	}
}
client.on('guildMemberAdd', (member) => {
	getCanvas(member);
});

// bot status
client.on('ready', () => {
	const arrayOfStatus = [
		'OwO',
		'UnU',
		'OnO',
		'UwU',
		'^w^',
		'<3',
		'Prefix is ;',
	];
	let index = 0;
	setInterval(() => {
		if (index === arrayOfStatus.length) index = 0;
		const status = arrayOfStatus[index];
		client.user.setPresence({
			activity: {
				name: status,
				type: 'WATCHING',
			},
			status: 'idle',
		});
		index++;
	}, 10000);
});
//? update's
client.on('ready', () => {
	const CHANNEL_FILE = './database/channel_file.json';
	let file = JSON.parse(fs.readFileSync(CHANNEL_FILE));

	for (let ch of file) {
		let channel = ch.channelId;
		const Embed = new Discord.MessageEmbed()
			.setColor(0xff1100)
			.setTitle(`Update`)
			.setDescription(
				`Version: v2.8.4\n**New commands:**\n\n**New features:**\nslash commands (need additonal permission, please kick and invite the bot. You can use ;invite)\nnew welcome message\n\n**Updated commands:**\n\n**Removed commands:**\n\n**Patched commands:**\n\n**Patches:**\n\n**Commands on repair:**\n\n**Repaired commands:**\n`
			)
			.setThumbnail('https://i.imgur.com/qRFFT4T.jpg')
			.setTimestamp()
			.setFooter('Made by Peety#1083');

		let chan = client.channels.cache.get(channel);
		chan.send(Embed);
	}
});
//? interactions
const getApp = (guildId) => {
	const app = client.api.applications(client.user.id);
	if (guildId) {
		app.guilds(guildId);
	}
	return app;
};

client.on('ready', async () => {
	console.log('Peety bot is ready!');

	const commands = getApp().commands.get();
	console.log(commands);

	await getApp().commands.post({
		data: {
			name: 'hello',
			description: 'Hello world command!',
		},
	});

	client.ws.on('INTERACTION_CREATE', async (interaction) => {
		const command = interaction.data.name.toLowerCase();

		if (command === 'hello') {
			reply(interaction, 'Hello world');
		}
	});
});

const reply = (interaction, response) => {
	client.api.interactions(interaction.id, interaction.token).callback.post({
		data: {
			type: 4,
			data: {
				content: response,
			},
		},
	});
};
//* twitch api
// const client2 = new tmi.Client({
//     options: {
//         debug: true,
//         messagesLogLevel: "info"
//     },
//     connection: {
//         reconnect: true,
//         secure: true
//     },

//     identity: {
//         username: `${process.env.TWITCH_USERNAME}`,
//         password: `${process.env.TWITCH_OAUTH}`
//     },
//     channels: [`${process.env.TWITCH_CHANNEL}`]
// })

// client2.connect().catch(console.error);
// client2.on("message", (channel, tags, message, self) => {
//     if (self) return

//     switch (message.toLowerCase()) {
//         case "commands":
//             client2.say(channel, `@${tags.username}, available commands are:
//             Commands Help Greetings Hi !Name

//             For more help just type "Help"`)
//             break;

//         case "greetings":
//             client2.say(channel, `@${tags.username}, what's up?`)
//             break;

//         case "hi":
//             client2.say(channel, `@${tags.username}, hello!`)

//         case '!name':
//             client2.say(channel, `Hello @${tags.username}, my name is Peety bot! Type "help" to continue...`);
//             break;

//         case 'help':
//             client2.say(channel, `${tags.username}, Use the following commands to get quick help:
//                 -> Commands: Get Commands ||
//                 Help: Get Help ||
//                 Greetings: Get Greetings ||
//                 Hi: Get "Hola" ||
//                 !Name: Get my name ||
//                 !Upvote first_name second_name: Upvote user first_name second_name ||  Upvote first_name second_name: Upvote user first_name second_name ||
//                 !Cheer first_name second_name: Cheer first_name second_name || Cheers first_name second_name: Cheer first_name second_name --

//                 For more help just ping me up!
//                  `);
//             break;

//         case "data":
//             twitch_stream()
//             break;

//         default:

//             let mymessage = message.toString();

//             if ((mymessage.split(" ")[0]).toLowerCase() === "!upvote" || "upvote") {
//                 client2.say(channel, `TwitchLit @${(mymessage.split(' ')[1] + '_' + mymessage.split(' ')[2])} TwitchLit  you have been UPVOTED by ${ tags.username }`);
//             } else if ((mymessage.split(' ')[0]).toLowerCase() === '!cheer' || 'cheers') {
//                 client2.say(`HSCheers @${(mymessage.split(' ')[1] + '_' + mymessage.split(' ')[2])} HSCheers you have been UPVOTED by ${ tags.username }`);
//             }
//             break;

//     }
// })

//* twitch api curl

// slash command

// const Banchojs = require("bancho.js")

// const OUSERNAME = "Peety_CZ"
// const OPASSWORD = "dda8af91"

// const OsuClient = new Banchojs.BanchoClient({
//     username: OUSERNAME,
//     password: OPASSWORD
// })

// OsuClient.connect().then(() => {
//     console.log("osu connected")
// })

// const OsuAPI = "151b0829fc23e2188bef7134cda28bf0541bd7f8"

// var tmi = require("tmi.js")
// var TwitchChannel = "Peety"

// var TwitchConfig = {
//     options: {
//         debug: true
//     },
//     connection: {
//         cluster: "aws",
//         reconnect: true
//     },
//     identity: {
//         username: "peety_cz",
//         password: "oauth:wspwbkr1rllladl1xhduekeb34rw4h"
//     }
// }

// -----------------------------------------------------------------------------------------------------------------------
// client.user.setPresence({
//     activity: {
//         name: "OwO",
//         type: "WATCHING"
//     },
//     status: 'idle'

// })

// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`/*);

//     client.commands.set(command.name, command);
//     }

// client.once("ready", () => {
//     console.log("Peety bot je připraven");
//     client.user.setActivity("Need repair", {type: "LISTENING"})
//     // memberCounter(client)

// });

// client.on("message", Message => {
//     if(!Message.content.startsWith(prefix) || Message.author.bot) return;

//     const args = Message.content.slice(prefix.length).split(" ")
//     const command = args.shift().toLocaleLowerCase();
//     if(command === "ahoj" || command === "hi" || command === "hello") {
//       client.commands.get("ahoj").execute(Message, args, Discord)
//     }
//     else if(command === "reload" && Message.author.id === "676503697252941856"){
//         client.commands.get("reload").execute(Message, args, Discord, client)
//     }
//     else if(command === "restart" && Message.author.id === "676503697252941856"){
//         client.commands.get("restart").execute(Message, args, Discord)
//     }
//     else if(command === "#1083"){
//         client.commands.get("Peety").execute(Message, args, Discord)
//         }
//         else if(command === "dead"){
//             Message.channel.bulkDelete(1);
//             const Embed = new Discord.MessageEmbed()
//             .setColor(0xFF1100)
//             .setTitle("Dead chat")
//             .setURL("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
//             .setDescription(" ")
//             .addFields()
//             .setImage("https://media1.tenor.com/images/abf952f17e8d32a4bff7dff21aab55ac/tenor.gif?itemid=19490288")
//             .setFooter("Bot made by Peety#1083")
//             Message.channel.send(Embed)
//             console.log("Dead used")
//         }
//         else if(command === "sad"){
//             client.commands.get("sad").execute(Message, args, Discord);
//         }
//             else if(command === "smile"){
//                 client.commands.get("smile").execute(Message, args, Discord)
//             }
//             else if(command === "baka"){
//                 client.commands.get("baka").execute(Message, args, Discord)
//             }
//             else if(command === "cuddle"){
//                 client.commands.get("cuddle").execute(Message, args, Discord)
//             }
//             else if(command === "bite"){
//                 client.commands.get("bite").execute(Message, args, Discord)
//             }
//             else if(command === "kiss"){
//                 client.commands.get("kiss").execute(Message, args, Discord)
//             }
//             else if(command === "hug"){
//                 client.commands.get("hug").execute(Message, args, Discord)
//             }
//             else if(command === "pat"){
//                 client.commands.get("pat").execute(Message, args, Discord)
//             }
//             else if(command === "cry"){
//                 client.commands.get("cry").execute(Message, args, Discord)
//             }
//             else if(command === "gn" || command === "goodnight"){
//                 client.commands.get("gn").execute(Message, args, Discord)
//             }
//             else if(command === "ticket"){
//                 client.commands.get("ticket").execute(Message, args, client, Discord)
//             }
//         else if(command === "play" || command === "p" || command === "pl"){
//             client.commands.get("play").execute(Message, args, Discord, client);
//         }
//         else if(command === "stop"){
//             client.commands.get("leave").execute(Message, args);
//         }
//     else if(command === "help"){
//         client.commands.get("help").execute(Message, args, Discord);
//     }
//     else if(command === "youtube") {
//             Message.channel.send("https://www.youtube.com/channel/UCLW90lOshMMA-G6DvcoNWeg")
//         }
//         else if(command === "clear"  && Message.member.hasPermission("MANAGE_MESSAGES") || command === "clear"  && Message.author.id === "676503697252941856") {
//             client.commands.get('clear').execute(Message, args);
//         }
//         else if(command === "mute" && Message.member.hasPermission("MUTE_MEMBERS") || command === "cmute"  && Message.author.id === "676503697252941856") {
//             client.commands.get("mute").execute(Message, args, Discord);
//         }
//         else if(command === "unmute" && Message.member.hasPermission("MUTE_MEMBERS") || command === "unmute"  && Message.author.id === "676503697252941856") {
//             client.commands.get("unmute").execute(Message, args);
//         }
//             else if(command === "kick" && Message.member.hasPermission("KICK_MEMBERS") || command === "kick"  && Message.author.id === "676503697252941856") {
//                 client.commands.get("kick").execute(Message, args);
//             }

//             else if(command === "ban" && Message.member.hasPermission("BAN_MEMBERS") || command === "ban"  && Message.author.id === "676503697252941856") {
//                 client.commands.get("ban").execute(Message, args);
//             }
//             else {
//                 Message.channel.send("Uknown command try to use ;help")
//             }

//         }
// );

client.login(process.env.TOKEN);

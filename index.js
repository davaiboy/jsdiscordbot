const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.guild) return;

	if (message.content.startsWith('!kick')){
		const user = message.mentions.users.first();

		if (user) {
			const member = message.guild.member(user);
			if (member) {
				member
					.kick('Broke a rule')
					.then(() => {
						message.reply('Successfully kicked ${user.tag}');
					})
			}		.catch(err => {
				
			})
		}
	}
})

client.login('');
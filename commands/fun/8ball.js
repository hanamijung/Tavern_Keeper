const prefix = process.env.prefix;

module.exports = {
	name: '8ball',
	category: 'Fun',
	description: 'Ask the magic 8-ball for an answer.',
	aliases: ['ask'],
	usage: `${prefix}8ball <question>`,
	guildOnly: true,
	run: async (client, message, args) => {
		const question = args[0];
		if (!question) {
			return message.channel.send(
				'You did not specify your question!',
			).then(message.delete({ timeout: 5000 })).then(msg => {msg.delete({ timeout: 5000 });});
		}

			const responses = [
				'Yes',
				'No',
				'Maybe',
        'Probably',
        'Definetly',
        '¯\_(ツ)_/¯',
				'Oh Hell No!',
				'Not in a million years',
				'An error occured, Please try again',
			];
			const response =  responses[Math.floor(Math.random() * responses.length - 1)];
			message.channel.send(`${message.author}, ${response}`);
	},
};
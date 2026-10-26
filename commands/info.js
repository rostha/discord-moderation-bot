const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Click me to invite to ur server.')
        .setURL('https://discord.com/oauth2/authorize?client_id=797767968272416779&scope=bot&permissions=1544028351')
        .setAuthor('Hideout')
        .setDescription('Hideout a Modreation bot as well as a fun bot made with Love by RemY.')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/avatars/546193198670807040/3b45e0d530be15e1a8f5c9e533a6b701.png')
        
        .setFooter('A bot for Modreation', 'https://cdn.discordapp.com/avatars/797767968272416779/0d78b1e2c0c75ddec30f6ec29a4257d3.png')
        .addFields(
            { name: 'Developer', value: 'ItzRemy07', inline: true},
            { name: 'Server', value: 'Zara01 limited', inline: true},
            { name: 'Purpose', value: 'Modreation'},
            { name: 'Programmed With', value: 'Python.js'}
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "info",
    description: "example of an Embed.",
    usage: ">info",
    accessableby: "Members",
    aliases: ['botinfo']
}

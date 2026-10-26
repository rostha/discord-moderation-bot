const  Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    
    if (!message.member.hasPermission('BAN_MEMBERS'))
    return message.reply("Opps!! You do not have permissions to use that command");
  if (args.length === 0) return message.reply("**Please provide an ID so I can ban it**");
  try {
    const user = await message.guild.members.ban(args[0]);
    message.channel.send('**I succesfylly Banned the User **');
  } catch (err) {
    console.log(err);
    message.channel.send('**An error occured. Either I do not have permissions or the user was not found**');
  }


}
module.exports.config = {
    name: "banid",
    description: "Bans a member",
    usage: ">banid",
    accessableby: "Admins",
    aliases: ['idban']
}


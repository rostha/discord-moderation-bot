const  Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    
    
    if (!message.member.hasPermission('KICK_MEMBERS'))
    return message.reply('**Ops!! You do not have permissions to use that command**');
  if (args.length === 0)
    return message.reply('**Please provide an ID So I can Kick **');
  const member = message.guild.members.cache.get(args[0]);
  if (member) {
    member
      .kick()
      .then((member) => message.channel.send(`${member} was kicked out of the server.`))
      .catch((err) => message.channel.send('**I cannot kick that user makesure that user is in the guild** :('));
  } else {
    message.channel.send('**That member was not found**');
  }


}
module.exports.config = {
    name: "kickid",
    description: "kickss a member",
    usage: ">kickid",
    accessableby: "Admins",
    aliases: ['idkick']
}


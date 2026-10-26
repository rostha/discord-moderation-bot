const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
   

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('797782307284058112');
        
        if(mutedRole) {
            member.roles.remove(mutedRole);
           
            message.reply("**I successfully unmuted the Member**.");
        }
}

module.exports.config = {
    name: "unmute",
    description: "",
    usage: ">unmute",
    accessableby: "Members",
    aliases: []
}

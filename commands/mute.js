module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return;
  
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission('ADMINISTRATOR') && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('797782307284058112');
     
        if(mutedRole) {
            member.roles.add(mutedRole);
           
            message.reply("**I successfully muted the Member**.");
        }
}

module.exports.config = {
    name: "mute",
    description: "mutes a member",
    usage: ">mute",
    accessableby: "Members",
    aliases: []
}

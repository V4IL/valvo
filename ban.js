const discod = require("discord.js");

module.exports.run = async (bot , message , args) => {

  if(commmand === `${prefix}ban`) {

     var ban = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

     if(!banuser) return message.channel.send("**Member is not found :false:**")

     var reason = arguments.join(" ").slice[22];

     if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("**You don't have Abillity :false:");

     if(!banuser.hasPermission("MANAGE_MESSAGE") message.channel.send("**You can't Use it :fales:**"))

     var ban = discord.RichEmbed()
      .setDescription("ban")
      .setcolor("#ee0000")
      .setfield("banned User", banuser)
      .setfield("BY", message.author)
      .setfield("reason", reason);

   return;

    var banChannel = message.guild.find(`name , "•kicked-banned❞"`);

    if(!banChannel) message.channel.send("**You can't Use it :fales:**");

    message.guild.member(banuser).ban(reason);

    banChannel.send(ban)

  return;

  }

}

module.exports.help = {
  name: "ban"
}

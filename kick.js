const discod = require("discord.js");

module.exports.run = async (bot , message , args) => {

  if(commmand === `${prefix}kick`) {

     var kick = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

     if(!kickuser) return message.channel.send("**Member is not found :false:**")

     var reason = arguments.join(" ").slice[22];

     if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("**You don't have Abillity :false:");

     if(!kickuser.hasPermission("MANAGE_MESSAGE") message.channel.send("**You can't Use it :fales:**"))

     var kick = discord.RichEmbed()
      .setDescription("Kick")
      .setcolor("#ee0000")
      .setfield("Kicked User", kickuser)
      .setfield("BY", message.author)
      .setfield("reason", reason);

  return;

     var kickChannel = message.guild.find(`name , "•kicked-banned❞"`);

     if(!kickChannel) message.channel.send("**You can't Use it :fales:**");

     message.guild.member(kickuser).kick(reason);

     kickChannel.send(Kick)

  return;

  }

}

module.exports.help = {
  name: "kick"
}

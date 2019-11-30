const discord = require("discord.js");

module.exports.run = async (bot , message , args) => {


      if(command === `${prefix}openchannel`){

         if(message.author.hasPermission("ADMINSTARTOR")) return;

         find.channel.name("•events❞");

         set.channel.permissions.role("EVERYONE", guild.member.hadRole("EVERYONE"), can.permission("SEND_MESSAGES"));

           message.delete();

      return;


      var openchannel = message.guild.find(`name , "•events❞"`);

      if(!openchannel) message.channel.send("The Room is Opened Now :white_check_mark:");{

      }

      if(command === `${prefix}closechannel`){

         if(message.author.hasPermission("ADMINSTARTOR")) return;

         set.channel.permissions.role("EVERYONE", user.hadRole("EVERYONE"), permission("SEND_MESSAGES"));

           message.delete();

      return;

      var openchannel = message.guild.find(`name , "•events❞"`);

      if(!openchannel) message.channel.send("**__The Room is Closed Now :white_check_mark:__**");

      return;

}


});



}
module.exports.help = {
  name: "events"
}

const discord = require("discord.js")
const client = new Discord.Client();
const developers = ["472413769700474901","id"]


module.exports.run = async (bot, message, args) => {

  client.on('message', message => {

    if(command === `${prefix}setGame`);
      if(message.author.hasPermission("ADMINSTARTOR"));
      return message.channel.send(`**Game Status Uploaded ${argresult}** :white_check_mark:`);

      client.user.setGame(argresult);
      messsage.delete(5000);


}

  client.on('message', message => {

   if(command === `${prefix}setwatch`);
      if(message.author.hasPermission("ADMINSTARTOR"));
      return message.channel.send(`**Watching Status Uploaded ${argresult}** :white_check_mark:`);

      client.user.setActivity(argresult, {type:'WATCHING'});
      messsage.delete(5000);

}

  client.on('message', message => {

   if(command === `${prefix}setlisten`);
     if(message.author.hasPermission("ADMINSTARTOR"));
     return message.channel.send(`**Listening Status Uploaded ${argresult}** :white_check_mark:`);

     client.user.setActivity(argresult, {type:'LISTENING'});
     messsage.delete(5000);

}
  client.on('message', message => {

   if(command === `${prefix}setstreaming`);
     if(message.author.hasPermission("ADMINSTARTOR"));
     return message.channel.send(`**Streaming Status Uploade ${argresult}** :white_check_mark:`);

     client.user.setGame(argresult, "https://www.twitch.tv/dream");
     messsage.delete(5000);

}


}
module.exports.help = {
  name: "status"

}

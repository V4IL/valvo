const discord = require("discord.js")
const client = new Discord.Client();
const developers = ["472413769700474901","id"]


module.exports.run = async (bot, message, args) => {

  client.on('message', message => {

      if(command === `${prefix}setava`);

      if(message.author.hasPermission("ADMINSTARTOR")); return message.channel.send(`Avatar Uploaded ${argresult} :white_check_mark: `);

      client.user.setAvatar(argresult);
      message.delete(5000);


      return;


}

module.exports.help = {
  name: "avatar"

}

const discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot , message , args) => {

//bc

  client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

   if(message.content(`${prefix}bc`)) {

      if(message.member.hasPermission("ADMINSTARTOR")); return;

      let args = message.content.split(" ").slice(1);

      var argresult = args.join(' ');

      var userIcon = message.author.displayavatarURL;

      var broadCastEmbed = new discord.RichEmbed()

      .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);

      message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
        m.send(`${argresult}\n ${m}`);

     }

  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\` << !Count Of Recipients :white_check_mark: `);
  message.delete();

  }

});

//bc online

   client.on('message', message => {
   if(message.author.bot) return;
   if(message.channel.type === 'dm') return;

      if(message.content.startsWith(prefix + online))

      if(message.member.hasPermission("ADMINSTARTOR")) return;

      let agrs = member.content.split(" ").slice(1);

      var argresult = args.join(' ');

      message.guidl.members.filter(m => m.presence.status !== 'offline').forEach(m => {

      m.send(`${argresult}\n ${m}`);

   })

      message.channel.send(`\`${message.guild.member.fiter(m => m.presence.status !== 'online').siz}\`  << !Count Of Recipients :white_check_mark: `);
      message.delete();

 };

//adminbc
  client.on("message", message => {

    if(message.content.guild) return;

    let args = message.content.split(' ').slice(1).join(' ');

    if(message.member.startsWith(Vadminbc));

    if(!message.author.id === '403258082869772288') return;

    message.channel.send("Sending the message :whie_check_mark: ");

    m.send(args);{

    }

  }

  module.exports.help = {
    name: "broadCast"
  }

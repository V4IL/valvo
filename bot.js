const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "V"
var adminprefix = 'V'


//bc

client.on("message", message => {
    if (message.content.startsWith("Vobc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "V";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\`   :mailbox:  Count Of Recipients
 `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("Vavatar")) {
message.channel.send(`This avatar For V{user} link : V{user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('V4lL BroadCastBot Is On ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('Vadminbc')){
if(!message.author.id === '403258082869772288') return;
message.channel.sendMessage('Sending The Messege |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === 'Vhelp')
    msg.reply('Check Your DM :white_check_mark:')
  });
  
  
  client.on("message", message => {
    if (message.content === "Vhelp") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help
                 !!**SendMsg**!!

     >>  Vobc | To Send it for All members !!
     >>  Vbc  | To Send it for All Members !!
     >>  Vadminbc | Simple BroadCast !!
            
                 !!**Admin**!!

     >>  Vsets : **To set the bot Streaming way**        
     >>  Vsetg : **To put the bot Playing way**
     >>  Vsetw : **To put the bot Watching way**
     >>  Vset1 : **To Make the bot Listening**
     >>  Vsetname : **To Change bot NAME**
     >>  Vsetava : **To Change bot AVATAR**
     >>  My Developer is ! •𝑽𝑨𝑳𝑳❞
         for more contact him .. [! •𝑽𝑨𝑳𝑳❞ ,#5703]

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["403258082869772288","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
} else 
  if (message.content.startsWith(adminprefix + 'dev')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅ My Developer Is ! •𝑽𝑨𝑳𝑳❞ ,#5703 ${argresult}**`)
}
});


client.login(process.env.TOKEN);

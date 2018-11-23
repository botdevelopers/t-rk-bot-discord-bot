module.exports = member => {
  const Discord = require('discord.js');
  const channel = member.guild.channels.find('name', 'hoşgeldiniz');
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
const embed = new Discord.RichEmbed()
  .setAuthor(member.user.username, memberavatar)
  .setColor("RANDOM")
  .setThumbnail(memberavatar)
  .setDescription(':inbox_tray: ' + '**__ ' + guild.name '__**' + ' | Sunucuya Katıldı | Hoşgeldin Bro!')
  channel.sendEmbed(embed);
  
  
  /** Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`:inbox_tray: Sunucuya Katıldı: **${member}** :inbox_tray:`); **/
};

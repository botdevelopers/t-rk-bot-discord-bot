module.exports = member => {
  const Discord = require('discord.js');
  const channel = member.guild.channels.find('name', 'hoşgeldiniz');
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(memberavatar)
  .setDescription(':outbox_tray: ' + member + ' | Sunucudan Ayrıldı | Güle Güle Bro!')
  channel.sendEmbed(embed);
  
  /**const channel = member.guild.channels.find('name', 'hoşgeldiniz');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`:outbox_tray: Sunucudan Çıktı: **${member}** :outbox_tray:`); **/
};

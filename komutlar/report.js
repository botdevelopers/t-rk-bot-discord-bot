exports.run = (client, message, args) => {
        if(message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send('🔨 - Sen Bir Yöneticisin!');
        };

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reports = message.guild.channels.find('name' , 'raporlar');
        let reason =  arg.slice(1).join(' ');

        if(!target) return message.channel.send('`Lütfen rapor göndermek için bir üye belirtin.`');
        if(!reason) return message.channel.send('`Lütfen bildirmek için bir neden belirtin.`');
        if(!reports) return message.channel.send('`Raporları kaydetmek için lütfen "raporlar" adlı bir kanal oluşturun.`');

        let reportembed = new Discord.RichEmbed()
            .setThumbnail(target.user.avatarURL)
            .setAuthor('Report', 'https://cdn.discordapp.com/emojis/465245981613621259.png?v=1')
            .setDescription(`New report by ${message.author.username}`)
            .addField('⚠ - Bildirilen Üye', `${target.user.tag}\n(${target.user.id})`, true)
            .addField('⚠ - Rapor Eden', `${message.author.tag}\n(${message.author.id})`, true)
            .addField('⚙ - Kanal', `${message.channel}`)
            .addField('🔨 - Sebep', `${reason}`)
            .setColor('0xfc4f35')
            .setTimestamp();
        reports.send(reportembed);

        message.channel.send(`**${target}** Adlı Üye **${message.author}** Tarafından [ ${reason} ] Sebebi İle Bildirildi!`).then(message => message.delete(5000));
    }
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'report',
  description: 'Belirlenen Kullanıcıyı Report Eder!',
  usage: 'report [@User] [Sebep]'
};

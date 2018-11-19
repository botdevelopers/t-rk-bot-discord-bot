const Discord = require('discord.js');
const client = new Discord.Client();
var request = require('request');
exports.run = (client, message, args) => {

request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.send(info.link);
    }
});
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ata','atatürk'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ataturk',
    description: 'Rastgele Bir Atatürk Resmi Gönderir.',
    usage: 'ataturk'
  };
  

var request = require('request');
const Discord = require('discord.js');


exports.run = function(client, message) {
  
request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        console.log(info.soz); // ve konsola çıktıyı versin.
    }
});

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['ping','p'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'espiri', //adını belirledik (kullanmak için gereken komut)
  description: 'Rastgele Bir Espiri Gönderir.', //açıklaması
  usage: 'espiri' //komutun kullanım şekli (mesela hava <bölge>)
};

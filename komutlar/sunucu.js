const Discord = require('discord.js');


exports.run = function(client, message) {

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['sunucubilgi','sb'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'sunucu', //adını belirledik (kullanmak için gereken komut)
  description: 'Sunucu Bilgilerini Gösterir.', //açıklaması
  usage: 'sunucu' //komutun kullanım şekli (mesela hava <bölge>)
};

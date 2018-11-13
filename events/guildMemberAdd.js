module.exports = member => {
    let username = member.user.username;
    member.send('Hoş geldin **' + username + '**!');
    member.member.guild.defaultChannel.send('Sunucumuza Hoşgeldin: ',username);
};

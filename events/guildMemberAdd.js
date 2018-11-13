module.exports = member => {
    let username = member.user.username;
    member.send('Sunucumuza Hoşgeldin **' + username + '**!');
};

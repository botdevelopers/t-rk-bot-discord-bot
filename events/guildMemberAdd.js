module.exports = member => {
    let username = member.user.username;
    member.send('Hoş geldin **' + username + '**!');
    member.sendMessage.send('hg '+username+'');
};

module.exports = {
    name: 'supportserver',
    description: "sends a support invite link!",
    execute(message, args){
        message.channel.send('`HERES AN INVITE LINK`   https://discord.gg/zVCvpyh');
    }
}
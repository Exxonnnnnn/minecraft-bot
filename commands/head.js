module.exports = {
    name: 'head',
    description: 'Grab a minecraft user\'s head.',
    category: 'Minecraft Skins',
    cooldown: '3s',
    aliases: [''],
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<minecraft username>',
    callback: async (message, args, text, client, prefix, instance) => {
      if (!args.length) {
        return message.channel.send(`You need to specify a Minecraft username!, ${message.author}!`);
      }

      const embed = new MessageEmbed()
      .setTitle(`${args[0]}'s head:`)
      .setFooter("Powered by Minotar | https://minotar.net/")
      .setImage(`https://minotar.net/heml/${args[0]}/100.png`)

      message.channel.send(embed);
    }
}
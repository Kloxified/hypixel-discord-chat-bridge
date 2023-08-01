const { toFixed } = require("../../contracts/helperFunctions.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "uptime",
  description: "Shows the uptime of the bot.",

  execute: async (interaction, client) => {
    const uptimeEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("🕐 Uptime!")
      .setDescription(`Online since <t:${toFixed(client.uptime / 1000, 0)}:R>`)
      .setFooter({
        text: `edited by @Kloxified | /help [command] for more information`,
        iconURL: "https://i.imgur.com/gPTqaEV.png",
      });

    interaction.followUp({ embeds: [uptimeEmbed] });
  },
};

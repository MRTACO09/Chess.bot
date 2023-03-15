const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Gets link for information website."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder().setDescription(
      "[To Website](https://mrtaco.github.io/EpicCheesers)"
    );
    await interaction.reply({ embeds: [embed], ephemeral: true});
  },
};

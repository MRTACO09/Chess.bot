const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("JUST FOR TESTING"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId(`testButton`)
      .setLabel("Run Test")
      .setStyle(ButtonStyle.Danger);
    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
      ephemeral: true
    });
  },
};

const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
  StringSelectMenuBuilder
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("JUST FOR TESTING"),
  async execute(interaction, client) {
    const menu = new StringSelectMenuBuilder()
      .setCustomId(`testMenu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: `Option 1`,
          value: `uno`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Option 2`,
          value: `dos`,
        })
      );
    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
      ephemeral: true
    });
  },
};

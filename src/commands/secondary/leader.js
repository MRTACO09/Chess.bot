const { SlashCommandBuilder } = require("discord.js");
let leader = "Nobody Yet";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("leader")
    .setDescription("Gets leader of the server."),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
      ephemeral: true
    });
    const newMessage = leader;
    await interaction.editReply({
      content: newMessage,
      ephemeral: true
    });
  },
};

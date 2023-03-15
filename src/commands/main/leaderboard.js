const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
let leaderboardArr = [
  "1: ",
  "2: ",
  "3: ",
  "4: ",
  "5: ",
  "6: ",
  "7: ",
  "8: ",
  "9: ",
  "10: ",
  "11: ",
  "12: ",
  "13: ",
  "14: "
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Displays server leaderboard."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Leaderboard")
      .setDescription("This is the current server leaderboard.")
      .setColor(0xff0000)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .addFields([
        { name: leaderboardArr[0], value: " " },
        { name: leaderboardArr[1], value: " " },
        { name: leaderboardArr[2], value: " " },
        { name: leaderboardArr[3], value: " " },
        { name: leaderboardArr[4], value: " " },
        { name: leaderboardArr[5], value: " " },
        { name: leaderboardArr[6], value: " " },
        { name: leaderboardArr[7], value: " " },
        { name: leaderboardArr[8], value: " " },
        { name: leaderboardArr[9], value: " " },
        { name: leaderboardArr[10], value: " " },
        { name: leaderboardArr[11], value: " " },
        { name: leaderboardArr[12], value: " " },
        { name: leaderboardArr[13], value: " " },
      ]);
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};

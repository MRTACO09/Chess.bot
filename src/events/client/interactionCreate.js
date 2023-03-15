module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.log(error);
        await interaction.reply({
          content: `Command ingested a fly.`,
          ephemeral: true,
        });
      }
    } else if (interaction.isButton) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if(!button) return new Error(`Button ingested a mosquito.`);
      try {
        await button.execute(interaction, client);

        } catch (err) {
          console.error(err);
        }
    } else if (interaction.isSelectMenu()){
        const {selectMenus} = client;
        const {customId} = interaction;
        const menu = selectMenus.get(customId);
        if(!menu) return new Error('Menu ingested a sausage.');
        try{
          await menu.execute(interaction, client);
        } catch (error){
          console.error(error);
        }
    }
  }
};


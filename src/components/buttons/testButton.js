module.exports = {
    data: {
        name: `testButton`
    },
    async execute (interaction, client){
        await interaction.reply({
            content: `It Worked!!`,
            ephemeral: true
        });
    }
}
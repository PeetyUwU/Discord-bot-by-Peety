const { Client } = require("discord.js");

module.exports = async (client) =>{
    const guild = client.guilds.cache.get("807004240480174170");
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get("811610596494540820");
        channel.setName(`Totall Members: ${memberCount.toLocaleString()} `);
        console.log("Updating Member Count UwU server");
    }, 600000)
    const guild2 =client.guilds.cache.get("766292172894371861");
    setInterval(() =>{
        const memberCount2 = guild2.memberCount;
        const channel2 = guild2.channels.cache.get("811715283567378483");
        channel2.setName(`Totall Members: ${memberCount2.toLocaleString()} `);
        console.log("Updating Member Count Peety server");
    }, 600000)
    const guild3 =client.guilds.cache.get("782711045936250890");
    setInterval(() =>{
        const memberCount3 = guild3.memberCount;
        const channel3 = guild3.channels.cache.get("811945864666284102");
        channel3.setName(`Totall Members: ${memberCount3.toLocaleString()} `);
        console.log("Updating Member Count Všehochuť server");
    }, 600000)
    const guild4 =client.guilds.cache.get("810826581966716928");
    setInterval(() =>{
        const memberCount4 = guild4.memberCount;
        const channel4 = guild4.channels.cache.get("811948209471356929");
        channel4.setName(`Totall Members: ${memberCount4.toLocaleString()} `);
        console.log("Updating Member Count bestie vibes only server");
    }, 600000)
}
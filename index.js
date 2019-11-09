const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjQyODI5NTc5NjM0OTk5MzM2.XccsWg.iKwpeifSzxVriO9-l56KTkFLDs4";

bot.on('ready', () => {
    console.log('this bot is online!');
});

bot.on('message', msg =>{ 
    if(msg.content === "Hello"){
        msg.reply('Hello Friend');
}
})

bot.login(token);
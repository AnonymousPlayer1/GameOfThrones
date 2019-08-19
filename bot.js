const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
if(message.content == '$h') {
    message.delete().catch();
    //message.reply('Hello Everyone!');
   message.channel.send('Hello Everyone!')
   }

});


bot.on('message', (message) => {
    
    if(message.content == '$v') {
        message.delete().catch();
        //message.reply('Welcome To The Server! In order to verify that you are human please type `$verify` to register on the waiting list for your verification! When you are verified you will be given the "Verified" Role along with an account balance for the server. If you have any questions please ask the owner.');
       message.channel.send('Welcome To The Server! In order to verify that you are human please type `$verify` to register on the waiting list for your verification! When you are verified you will be given the "Verified" Role along with an account balance for the server. If you have any questions please ask the owner.')
       }
    
    });


    bot.on('message', (message) => {
    
        if(message.content == '$verify') {
            message.delete().catch();
            //message.reply('Your account has been put on the waiting list!);
           message.channel.send('Your account has been put on the waiting list!')
           }
        
        });
        
    

        bot.on('ready', async () => {
            console.log(`${bot.user.username} is online!`);
            bot.user.setActivity("Code be written", {type: "WATCHING"});
          });


          bot.on('message', (message) => {
    
            if(message.content == '$channelfix') {
                message.delete().catch();
                //message.reply('```The Channel has been fixed```');
               message.channel.send('```The Channel has been fixed```')
               }
            
            });




            bot.on('message', (message) => {
    
                if(message.content == 'g!System Send') {
                    
                    //message.reply('System Sending...');
                   message.channel.send('System Sending...')
                   }
                
                });



                bot.on('message', (message) => {
    
                    if(message.content == 'g!1') {
                        message.delete().catch();
                        //message.reply('System Has Been Sent!');
                       message.channel.send('System Has Been Sent!')
                       }
                    
                    });




                    bot.on('message', (message) => {
    
                        if(message.content == 'g3') {
                            message.delete().catch();
                            //message.reply('Type **Dracarys** to not get kicked from the server!!!');
                           message.channel.send('Type **Dracarys** to not get kicked from the server!!!')
                           }
                        
                        });


                        bot.on('message', (message) => {
    
                            if(message.content == 'Dracarys') {
                                
                                //message.reply('YOU HAVE BEEN CHECKED!');
                               message.channel.send('YOU HAVE BEEN CHECKED!')
                               }
                            
                            });



































































































client.login(process.env.BOT_TOKEN);

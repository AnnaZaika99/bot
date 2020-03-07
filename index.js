var TelegramBot = require('node-telegram-bot-api');

var token = '1098943217:AAFjgqUAujAdIzSR34WNQDO34YyckfP1_ww';

var bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) =>{
    console.log(msg)
    bot.sendMessage(msg.chat.id, 'hello, ' + msg.from.first_name)
})

bot.on('message', msg => {
    var chatId = msg.chat.id
    
    if(msg.text === 'Закрыть') {
        bot.sendMessage(chatId, 'Закрываю',{
            reply_markup:{
                remove_keyboard: true
            }
        })
    }
     else if (msg.text === 'Ответить') {
        bot.sendMessage(chatId, 'Отвечаю',{
            reply_markup:{
                force_reply: true
            }
        })
    }
    else {
        bot.sendMessage(chatId, 'Выбери', {
            reply_markup:{
                keyboard:[
                    [{
                        text:'Местоположение',
                        request_location:true
                    }],
                    [{
                        text:'Контакт',
                    request_contact:true
                    }],
                    ['Закрыть','Ответить']
                ]
            }
        })
    }
    })
    
const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || ' CYBER-TECH'}*  
   Version: *${settings.version || '2.0.5'}*
   by ${settings.botOwner || 'THE GAME'}
   YT : ${global.ytch}
╚═══════════════════╝

📜 *COMMAND CATEGORIES:*

╔══════════════════╗
      🌐 *GENERAL TOOLS*
╠══════════════════╣
]➤ 📔  .help / .menu  
]➤ 🟢  .alive  
]➤ 📶  .ping  
]➤ 🔊  .tts <text>  
]➤ 👑  .owner  
]➤ 😂  .joke  
]➤ 💬  .quote  
]➤ 🧠  .fact  
]➤ 🌦️  .weather <city>  
]➤ 📰  .news  
]➤ 🎨  .attp <text>  
]➤ 🎶  .lyrics <song_title>  
]➤ 🎱  .8ball <question>  
]➤ 👥  .groupinfo  
]➤ 🛡️  .staff / .admins  
]➤ 🔍  .vv  
]➤ 🌐  .trt <text> <lang>  
]➤ 📸  .ss <link>  
]➤ 🆔  .jid  
]➤ 🕵️  .hackgc <group link>  
]➤ 🚫  .ban-channel <channel link>  
╚══════════════════╝
╔══════════════════╗
      👮‍♂️ *ADMIN CONTROLS*
╠══════════════════╣
]➤ 🚫  .ban @user  
]➤ ⬆️  .promote @user  
]➤ ⬇️  .demote @user  
]➤ 🔇  .mute <minutes>  
]➤ 🔊  .unmute  
]➤ 🗑️  .delete / .del  
]➤ 👢  .kick @user  
]➤ ⚠️  .warn @user  
]➤ 📋  .warnings @user  
]➤ 🔗  .antilink  
]➤ 🤬  .antibadword  
]➤ 🧹  .clear  
]➤ 📣  .tag <message>  
]➤ 📢  .tagall  
]➤ 🤖  .chatbot  
]➤ 🔄  .resetlink  
]➤ 👋  .welcome <on/off>  
]➤ 📴  .goodbye <on/off>  
╚══════════════════╝
╔═══════════════╗
      🔒 *OWNER ZONE*
╠═══════════════╣
]➤ 🔧  .mode
]➤ 📶  .autostatus
]➤ 🧼  .clearsession
]➤ 🛡️  .antidelete
]➤ 🧹  .cleartmp
]➤ 🖼️  .setpp <reply to image>
]➤ 😎  .autoreact
╚═══════════════╝
╔══════════════════╗
    🎨 *IMAGE & STICKER FUN*
╠══════════════════╣
]➤ 🌫️  .blur <image>  
]➤ 🖼️  .simage <reply to sticker>  
]➤ 🧊  .sticker <reply to image>  
]➤ 🧷  .tgsticker <link>  
]➤ 😂  .meme  
]➤ 🎁  .take <packname>  
]➤ 😍  .emojimix <emoji1>+<emoji2>  
╚══════════════════╝  

╔══════════════════╗
    🎮 *GAMES & CHALLENGES*
╠══════════════════╣
]➤ ❌⭕  .tictactoe @user  
]➤ 🧠  .hangman  
]➤ 🔤  .guess <letter>  
]➤ 📚  .trivia  
]➤ ✅  .answer <answer>  
]➤ 😇  .truth  
]➤ 😈  .dare  
╚══════════════════╝  

╔══════════════════╗
    🤖 *AI COMMANDS*
╠══════════════════╣
]➤ 💬  .gpt <question>  
]➤ 🧠  .gemini <question>  
]➤ 🎨  .imagine <prompt>  
]➤ 🔮  .flux <prompt>  
╚══════════════════╝
╔══════════════════╗
    🎯 *FUN & SOCIAL*
╠══════════════════╣
]➤ 💖  .compliment @user  
]➤ 🤬  .insult @user  
]➤ 😘  .flirt  
]➤ 📝  .shayari  
]➤ 🌙  .goodnight  
]➤ 🌹  .roseday  
]➤ 🎭  .character @user  
]➤ 💀  .wasted @user  
]➤ 💞  .ship @user  
]➤ 🥺  .simp @user  
]➤ 🤡  .stupid @user [text]  
╚══════════════════╝  

╔══════════════════╗
    🔤 *TEXTMAKER STYLES*
╠══════════════════╣
]➤ 🧱  .metallic <text>  
]➤ ❄️  .ice <text>  
]➤ 🌨️  .snow <text>  
]➤ 💎  .impressive <text>  
]➤ 🧬  .matrix <text>  
]➤ 💡  .light <text>  
]➤ 🌈  .neon <text>  
]➤ 😈  .devil <text>  
]➤ 💜  .purple <text>  
]➤ ⚡  .thunder <text>  
]➤ 🍃  .leaves <text>  
]➤ 🎖️  .1917 <text>  
]➤ 🏟️  .arena <text>  
]➤ 🕶️  .hacker <text>  
]➤ 🏖️  .sand <text>  
]➤ 🎀  .blackpink <text>  
]➤ 🌀  .glitch <text>  
]➤ 🔥  .fire <text>  
╚══════════════════╝  

╔══════════════════╗
    📥 *DOWNLOADERS*
╠══════════════════╣
]➤ 🎵  .play <song_name>  
]➤ 🎶  .song <song_name>  
]➤ 📸  .instagram <link>  
]➤ 📘  .facebook <link>  
]➤ 🎥  .tiktok <link>  
]➤ ?repo
video <song name>  
]➤ 📹  .ytmp4 <link>  
╚══════════════════╝  

╔══════════════════╗
    💻 *DEVELOPER TOOLS*
╠══════════════════╣
]➤ 🧾  .git  
]➤ 🐙  .github  
]➤ 📂  .sc  
]➤ 🧠  .script  
]➤ 📁  .repo
╚══════════════════╝
📢 *Join our channel for updates!*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: ' 120363401845425966@newsletter',
                        newsletterName: ' CYBER-TECH',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363418929897261@newsletter',
                        newsletterName: ' CYBER-TECH by THE GAME',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;

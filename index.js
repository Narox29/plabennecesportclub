
// -------- Mon Code --------

//---------discord.js--------
const Discord = require("discord.js")

const config = require("./config.json")

const bot = new Discord.Client()

const prefix = "p/"

bot.setMaxListeners(2000);


// ---- Connection ----

bot.login(config.token)

bot.on ("ready", async message => { 

    console.log("Je suis prêt");
    })


// -------- p/twitter || p/twitch --------

bot.on("message", async message => {
    if (message.author.bot) return;
    if(message.content === "p/twitter"){
        message.channel.send(":globe_with_meridians:  https://twitter.com/PlabennecESC")
    }
})

bot.on("message", async message => {
    if(message.content === "p/twitch"){
        message.channel.send(":globe_with_meridians: https://www.twitch.tv/plabennecesportwebtv")
    }
})


// -------- p/clear --------

bot.on("message", async message => {
    if(message.content.startsWith("p/clear")){
        let dl = message.content.split(" ").slice(1)
        if(!dl || isNaN(dl) || dl > 100 | dl < 1) return message.reply("Veuillez chosir un nombre en 1 et 100 !")

        message.channel.bulkDelete(dl+1, true).then(message.channel.send("Je vien de supprimer "+dl+" messages")).catch(console.error)
    }
})


// -------- p/info --------

bot.on("message", message => {
    if(message.content.startsWith("p/info")){
        let embed = new Discord.MessageEmbed()
        .setColor("#F9FDFF")
        .setTitle("Information sur le serveur")
        .setDescription(`Information sur : ${message.guild}`)
        .addField(
          "Propriétaire",
          `Le propriétaire de ce serveur est : ${message.guild.owner}`
        )
        .addField(
          "Nombre de membres",
          `Ce serveur contient : ${message.guild.memberCount} membres`
        )
        .addField(
          "Quantité d'émoji personnalisé",
          `Ce serveur contient : ${message.guild.emojis.cache.size} emojis personnalisés`
        )
        .addField(
          "Quantité de rôles",
          `Ce serveur contient : ${message.guild.roles.cache.size} rôles`
        )
        .addField(
          "Date de création",
          `La date de création de ce serveur est : ${message.guild.createdAt.toLocaleString()}`
        )
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setFooter(`${message.guild}`, message.guild.iconURL({dynamic : true}))
        .setTimestamp();
  
      message.channel.send(embed);
    }
  })




// -------- p/help --------

bot.on("message", message => {  
  if (message.author.bot) return;  //le bot ne repond pas en mp ou par un autre bot
  if (message.content.startsWith(prefix + "help")) {
      message.delete();
      let embed = new Discord.MessageEmbed()
          .setColor("##F9FDFF")
          .setDescription("**\<:Formulaire:818222799986360354> Aide** \n**~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•**")  
          .setThumbnail("https://media.discordapp.net/attachments/798976066722988044/801178370183397406/how-to-ask-for-help-437x230.jpg")
          .setFooter("Aide Approuvé")
          .addField("**\🚔 __Administration: (pas faite)__**", "**Clear:** `/clear [nombre](100 max)` \n**Ban:** `/ban [mention]` \n**Kick:** `/Kick [mention]` \n**Mute:** `/mute [mention]`\n**unmute:** `/unmute [mention]` ", false)
          .addField("**\🌐 __Réseaux__**", "**Twitter** `p/twitter` \n**Twitch** `p/twitch`")
          .addField("**\⚙️ __Autres Commandes:__**", "\n **Informations:** `/info` \n**Aide:** `/help ` ", false)
          .addField("**~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•~•**\n", "**Merci d'avoir pris le temps de lire ce message**", false)
          .setTimestamp()
      message.channel.send(embed)
  }
})

client.login{process.env.TOKEN}
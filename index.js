//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();

//Variables :
var servers = {};

var party_launch = false;

var fs = require('fs');

var prefix = "x|";

//Login + connexion du bot :
client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Connexion en cours ...");
    setInterval(function() {

        var statut = [
          `x|help for help ^^`, 
          `Lavina By FilEeaZaiR`,
          `${client.users.size} users`];
    
        var random = Math.floor(Math.random()*(statut.length));
    
        client.user.setPresence({ 
            game: { 
            name: statut[random],
            type: 0
          }
        });
      }, 30000); 
});

client.on("guildMemberAdd", member => {

    const logs = member.guild.channels.find(m => m.id === "556577318823526408");
    if (!logs) return;

    var role = member.guild.roles.find(r => r.id === "555793675066540042");
    member.addRole(role).catch(console.error);

    logs.send({
        embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: "Arrivée d'un nouvel utilisateur",
            fields: [
            {
                name: "Un nouvel utilisateur vient d'arriver",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de membres après l'arrivée de __${member.user.tag}__`,
                value: member.guild.memberCount,
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });
});

//Début de la commande règlements :
client.on(`message`, message =>{

//Commande help générale :
    if(message.content === prefix + "règles" || message.content === prefix + "règlements") {
        console.log(`Un utilisateur viens de faire la commande règles !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: "Bienvenue sur le Discord d'Ananas",
                fields: [
                {
                        name: "***Règles :***",
                    value: " • Ne pas insulter \n • Ne pas spam/flood \n • Ne pas abuser des majuscules \n • Respecter les autres membres du Discord ainsi que le Staff \n • Ne pas mentionner les membres du staff inutilement \n • Ne pas pub en message privé \n • Avoir une bonne écriture/orthographe \n • Ne pas pub sauf dans le salon conçu spécialement pour \n • Ne pas faire les commandes bots dans le général ou autres mais bien dans le salon prévu à cet effet",
                    inline: true
                },
                {
                    name: "Si ces règles ne sont pas respectées",
                    value: "vous risquez l’exclusion voir le **ban**",
                    inline: true
                },
                {
                    name: "**À savoir :**",
                    value: "Nous ouvrons de temps à autres des candidatures pour le grade @Modérateurs . Alors si cela vous intéresse allez dans Annonces  vous y trouverez tout. Si vous pensez avoir les compétences requises et que les candidatures sont ouvertes la candidature devra être envoyée à Luma en privé. \n\nJe répète qu’il est primordial d’utiliser les bons salons ! \n\nLes insultes sont tolérées mais à titre de plaisanterie \n*Exemple : Connard va :joy:*",
                    inline: true
                },
                {
                    name: "Chose à retenir et une des plus importantes...",
                    value: "Amusez-vous, tout en respectant les règles !",
                    inline: true
                },
                {
                    name: "Pour accepter le règlement",
                    value: "appuyer sur :white_check_mark: !",
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: `Règles du serveur d'Ananas | FilEeaZaiR#1258`,
                }
            }
        });
    }
    
//Commande help générale :
    if(message.content === prefix + "role" || message.content === prefix + "raddrole") {
        console.log(`Un utilisateur viens de faire la commande roles !`)
        message.channel.send({
            embed: {
                color: 0xFE6F01,
                title: "Hey @everyone",
                fields: [
                {
                    name: "vous voulez avoir un rôle",
                    value: "alors voici des rôles disponible :",
                    inline: false
                },
                {
                    name: "<@&586249085086990336> :",
                    value: "Appuyez sur :pick:",
                    inline: false
                },
                {
                    name: "<@&586249089835073556> :",
                    value: "Appuyez sur :girl:",
                    inline: false
                },
                {
                    name: "<@&586249094062800907> :",
                    value: "Appuyez sur :boy:",
                    inline: false
                },
                {
                    name: "<@&587217102965047316>",
                    value: "Appuyez sur :middle_finger: (cette émoji, c'est pour les majeurs ^^)",
                    inline: true
                },
                {
                    name: "<@&587217110460268565>",
                    value: "Appuyez sur :underage:",
                    inline: true
                },
                {
                    name: "<@&587217460319485952>",
                    value: "Appuyez sur :tada:",
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: `Règles du serveur d'Ananas | FilEeaZaiR#1258`,
                }
            }
        });
    }
});

const Discord = require('discord.js');
const colors  = require('colors');
const fs      = require('fs');

const warn    = require('./utils/warn');
const info    = require('./utils/info');
const error   = require('./utils/error');

const prefix  = '##';
const token   = require('./token.json').token;

const client  = new Discord.Client({
    fetchAllMembers: true
});

client.commands = new Map();

fs.readdir(__dirname + '/commands', (err, files) => {
    if (err) error('CommandHandler: ' + err);

    for (const file of files) {
        if (!file.endsWith('.js')) warn('A non-command file appeared in /commands.');

        let filename = file.split('.')[0];
        let command  = require(__dirname + '/commands/' + filename);
        client.commands.set(filename, command); 
    }
});

client.login(token);

client.on('ready', () => {
    info('Client logged in as ' + client.user.tag);
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    let message_array = message.content.split(' ');
    let command_name  = message_array[0].substring(1);
    let args          = message_array.shift();

    if (!client.commands.has(command_name)) return;

    try {
        client.commands.get(command_name)(client, message, args);
    } catch(err) {
        error('MessageEvent: ' + err);
    }
});
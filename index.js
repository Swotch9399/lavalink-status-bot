const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { Manager } = require("erela.js");
const { readdirSync } = require("node:fs");
const keep_alive = require('./keep_alive.js');
require("dotenv").config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});
client.config = require("./config.js");
client.manager = new Manager({
    nodes: client.config.nodes,
    send: (id, payload) => {
        const guild = client.guilds.cache.get(id);
        if (guild) guild.shard.send(payload);
    },
}).on("nodeConnect", node => console.log(`Node "${node.options.identifier}" connected.`));

readdirSync("./events/").forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Loading Events Client ${eventName}`);
    client.on(eventName, event.bind(null, client));
});
client.login(client.config.token);

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});

const express = require('express');
const app = express();
const port = 10000;

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(port);
});


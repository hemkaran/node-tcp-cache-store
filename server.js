#!/usr/bin/env node
'use strict';

// load the Node.js TCP library
const net = require('net');
const cache = require('./cache');

const PORT = 5000;
const ADDRESS = '127.0.0.1';

const messages = {
    COMMAND_NOT_SUPPORTED: `| Command not supported\n\n`,
    HELP_COMMAND: `| Usage:
|            set <key> <value> -> Set the value in cache corresponding to key
|            get <key>         -> Get the value from cache corresponding to key
|            keys              -> Get all keys
|            help              -> Get help
 ---------------------------------------------------------------------------------\n\n`,
    SET_COMMAND: '| Invalid syntax, Use: set <key> <value>\n\n',
    GET_COMMAND: '| Invalid syntax, Use: get <key>\n\n',
    KEYS_COMMAND: '| Invalid syntax, Use: keys\n\n',
};

messages.COMMAND_NOT_SUPPORTED = messages.COMMAND_NOT_SUPPORTED + messages.HELP_COMMAND;

const getCommandParam = (data) => {
    let command = {};
    let values = data.split(' ');
    command.command = values[0];
    command.key = values[1];
    if (values.length > 2) {
        values.splice(0, 2);
        if(values.length > 1) {
            let ttl = values[values.length - 1];
            ttl = +ttl;
            if(!isNaN(ttl)) {
                command.ttl = ttl;
            } else {
                values.splice(-1);
            }
        }
        command.value = values.join(' ');
    }
    return command;
};

const onClientConnected = (socket) => {
    // Giving a name to this client
    let clientName = `${socket.remoteAddress}:${socket.remotePort}`;

    // Logging the message on the server
    console.log(`${clientName} connected.`);

    socket.on('data', (data) => {
        data = data.toString().replace(/[\n\r]*$/, '');
        if (!data) {
            socket.write(messages.COMMAND_NOT_SUPPORTED);
            return;
        }

        data = getCommandParam(data);
        console.log(data);
        if (!data.command) {
            socket.write(messages.COMMAND_NOT_SUPPORTED);
            return;
        }

        switch(data.command) {
            case 'set':
                if (!data.key || !data.value) {
                    socket.write(messages.SET_COMMAND);
                    return;
                }
                cache.set(data.key, data.value, data.ttl);
                socket.write('| Set ' + data.key + ' in cache done\n\n');
                break;
            case 'get':
                if (!data.key) {
                    socket.write(messages.GET_COMMAND);
                    return;
                }
                socket.write('| ' + cache.get(data.key) + '\n\n');
                break;
            case 'keys':
                socket.write('|  ' + cache.getAll().join('\n|  ') + '\n\n');
                break;
            case 'help':
                socket.write(messages.HELP_COMMAND);
                break;
            default:
                socket.write(messages.COMMAND_NOT_SUPPORTED);
                break;
        }
    });

    // Triggered when this client disconnects
    socket.on('end', () => {
        // Logging this message on the server
        console.log(`${clientName} disconnected.`);
    });
};

let server = net.createServer(onClientConnected);
server.listen(PORT, ADDRESS);

console.log(`Server started at: ${ADDRESS}:${PORT}`);
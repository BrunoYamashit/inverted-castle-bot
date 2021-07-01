import { Client } from 'discord.js';
import config from '../../config';

import debug from './commands/debug';
import marcopolo from './commands/marcopolo';
import pingpong from './commands/pingpong';

export default (): void => {
  const botClient = new Client();

  botClient.on('ready', () => {
    console.log('I am ready! Use me ( ͡° ͜ʖ ͡°)');
  });

  botClient.on('message', (message) => {
    // TODO: Check user state for responses (they don't use prefix)

    if (!message.content.startsWith(config.bot.prefix)) {
      return;
    }

    const [command, ...args] = message.content.toLowerCase().replace(config.bot.prefix, '').trim().split(' ');

    // TODO: Improve command engine
    switch (command) {
      case 'ping':
        pingpong(message);
        break;
      case 'marco':
        marcopolo(message);
        break;
      case 'debug':
        debug(message, args);
        break;
      default:
        message.channel.send("Sorry, I can't understand what you said. ¯\\_(ツ)_/¯");
        break;
    }
  });

  botClient.login(config.bot.token);
};

import { Message } from 'discord.js';

export default (message: Message): void => {
  message.channel.send('pong');
};

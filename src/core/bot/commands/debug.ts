import { Message } from 'discord.js';

export default (message: Message, args: string[]): void => {
  message.channel.send(`Called at ${new Date()}\n Arguments received:\n-${args.join('\n-')}`);
};

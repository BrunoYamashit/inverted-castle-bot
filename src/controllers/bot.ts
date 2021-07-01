import { Client, Message } from "discord.js";
export class Bot {
    client: Client;
    constructor() {
        this.client = new Client();

        this.client.on('ready', this.ready);
        this.client.on('message', this.message);

        this.client.login(process.env.BOT_TOKEN);
    }
    private ready(){
        console.log('I am ready!');
    }
    private message(message: Message){
        if (process.env.BOT_PRINTS_MESSAGES?.toLowerCase() === 'true') console.log(message);
        if (message.content === 'ping') {
            message.channel.send('pong');
        }
    }
}
import * as dotenv from 'dotenv';
import { Bot } from './bot';
export class Server {
    constructor() {
        dotenv.config();
        new Bot()
    }
}
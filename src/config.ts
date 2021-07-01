// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const {
  BOT_PREFIX = '',
  BOT_TOKEN = '',
} = process.env;

export default {
  bot: {
    prefix: BOT_PREFIX,
    token: BOT_TOKEN,
  },
} as const;

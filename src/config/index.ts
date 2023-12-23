import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.local`, override: true });

const config = {
  SERVER: {
    PORT: process.env.SERVER_PORT,
  },
};

export default config;

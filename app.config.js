// filepath: /Users/ripeseed/Desktop/testapp/MiniWallet/app.config.js
import 'dotenv/config';

export default {
  expo: {
    
    extra: {
      EXCHANGE_RATE_API_KEY: process.env.EXHANGE_RATE_API_KEY,
    },
    
  },
};
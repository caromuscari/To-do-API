import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => {
  return {
    server: {
      port: process.env.PORT,
      environment: process.env.NODE_ENV,
      main_url: process.env.MAINURL,
    },
    database: {
      mongo_uri: process.env.MONGO_URI,
    },
  };
});

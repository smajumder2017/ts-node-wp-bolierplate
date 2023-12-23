import express from 'express';
import config from '@/config';

const app = express();

app.listen(config.SERVER.PORT, () => {
  console.log(`Server satrted @ ${config.SERVER.PORT}`);
});

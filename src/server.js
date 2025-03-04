import express from 'express';
import cors from 'cors';
import pino from 'pino';
import { env } from './utils/env.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { ctrlWrapper } from './utils/ctrlWrapper.js';
import cookieParser from 'cookie-parser';
import router from './routers/index.js';
import { UPLOAD_DIR } from './constants/index.js';

const PORT = Number(env('PORT', '3000'));

const logger = pino({
  level: 'info',
});

export const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.get('/', (req, res) => {
    logger.info('GET request received on /');
    res.json({
      message: 'Hello world!',
    });
  });

  app.use(router);
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('*', ctrlWrapper(notFoundHandler));
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
};

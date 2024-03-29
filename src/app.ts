import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import createDebug from 'debug';
import { errorMiddleware } from './middleware/error.middleware.js';

import { usersRouter } from './router/users.router.js';
import { helmetsRouter } from './router/helmets.router.js';
import { shopCarRouter } from './router/shop.car.router.js';

const debug = createDebug('W7E:app');

export const app = express();
debug('Starting');

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.static('public'));

app.use('/users', usersRouter);
app.use('/helmets', helmetsRouter);
app.use('/shopcar', shopCarRouter);

app.use(errorMiddleware);

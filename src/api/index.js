import express from 'express';
import {userRouter} from './resources/user';
import {vehicalRouter} from './resources/vehical';
import {hotelRouter} from './resources/hotel';

export const restRouter = express.Router();

restRouter.use('/user',userRouter);
restRouter.use('/vehical',vehicalRouter);
restRouter.use('/hotel',hotelRouter);
import express from 'express';
import hotelController from './hotelController';
import passport from 'passport';

export const userRouter = express.Router();

userRouter.post('/getKey', hotelController.getKey);
userRouter.post('/signUp', hotelController.signUp);
userRouter.post('/login', hotelController.login);
userRouter.post('/bookhotel', hotelController.bookHotel);







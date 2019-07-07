import express from 'express';
import UserController from './userController';
import passport from 'passport';

export const userRouter = express.Router();

userRouter.post('/getKey', UserController.getKey);
userRouter.post('/signUp', UserController.signUp);
userRouter.post('/login', UserController.login);
userRouter.post('/bookvehical', UserController.bookVehical);
userRouter.post('/bookhotel', UserController.bookHotel);







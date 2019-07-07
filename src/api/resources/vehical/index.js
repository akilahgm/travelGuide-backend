import express from 'express';
import vehicalController from './vehicalController';
import passport from 'passport';

export const userRouter = express.Router();

userRouter.post('/getKey', vehicalController.getKey);
userRouter.post('/signUp', vehicalController.signUp);
userRouter.post('/login', vehicalController.login);
userRouter.post('/bookvehical', vehicalController.bookVehical);








import express, { Router, Request, Response, NextFunction } from 'express';
import {userSignUp, userLogin} from "../controller/users";
import authenticate from '../authentication/authenticate';
const routerU = Router();
/* GET users listing. */
routerU.post('/signup', function(req, res, next) {
  userSignUp(req,res);
});

routerU.post('/login',  (req: Request, res: Response, next: NextFunction) => {
  userLogin(req, res);
});

// routerU.post('/Signup',authenticate ,(req: Request, res: Response, next: NextFunction) => {
  
//   userSignUp(req, res);
// });

export default routerU

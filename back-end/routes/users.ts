
import express, { Router, Request, Response, NextFunction } from 'express';
import {userSignUp, userLogin} from "../controller/users";
import authenticate from '../authentication/authenticate';
const routerU = Router();
/* GET users listing. */
routerU.post('/signup', function(req, res, next) {
  userSignUp(req,res);
});
1
routerU.post('/login',  (req: Request, res: Response, next: NextFunction) => {
  
  userLogin(req, res);
});


export default routerU

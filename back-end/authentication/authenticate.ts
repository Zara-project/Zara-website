import { Request, Response,NextFunction } from 'express';
import jsonWebToken, {  Secret } from "jsonwebtoken"
import { config } from 'dotenv';
config();



function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.body.authorization;
      console.log(authHeader);
  
      if (!authHeader) {
        return res.sendStatus(401);
      }
  
      const token = authHeader.split(' ')[1];
      console.log(token, 'token');
  
      if (!token) {
        return res.sendStatus(401);
      }
  
      jsonWebToken.verify(token, process.env.ACCESS_TOKEN_SECRET as Secret);
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed: Invalid token' });
    }
  }
  




export default authenticate
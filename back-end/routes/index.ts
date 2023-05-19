import express, { Router, Request, Response } from 'express';
import {getAllProducts} from "../controller/getAll";
import authenticate from '../authentication/authenticate';
import {addToCart,getCartItems,removeFromCart} from "../controller/Cart";


const routerI = Router();

/* GET home page. */
routerI.get('/', (req: Request, res: Response) => {
  getAllProducts(req, res);
});
routerI.post("/b",authenticate,(req: Request, res: Response)=>{
  addToCart(req, res);
}) 

routerI.get('/b/:userId', authenticate,(req: Request, res: Response)=>{
  getCartItems(req, res);
}) 
routerI.delete('/b/:cartItemId',authenticate,(req: Request, res: Response)=>{
  removeFromCart(req, res);
}) 


export default routerI;

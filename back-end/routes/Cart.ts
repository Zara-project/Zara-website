import express, { Router, Request, Response } from 'express';
import {addToCart,getCartItems,removeFromCart} from '../controller/Cart';
import authenticate from '../authentication/authenticate'

const router = Router();





export default router;
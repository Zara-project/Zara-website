import express, { Router, Request, Response } from 'express';
import {getAllProducts} from "../controller/getAll";

const routerI = Router();

/* GET home page. */
routerI.get('/', (req: Request, res: Response) => {
  getAllProducts(req, res);
});

export default routerI;

import express, { Router, Request, Response } from 'express';
import {getAllProducts} from "../controller/getAll";

const router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response) => {
  getAllProducts(req, res);
});

export default router;

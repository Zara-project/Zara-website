import express, { Router, Request, Response } from 'express'
import { getProduct } from '../controller/getone'

const router: Router = express.Router()

router.get('/getone/:id', (req: Request, res: Response) => {
  getProduct(req, res)
});

export default router

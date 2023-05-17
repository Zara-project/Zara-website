import { Request, Response } from 'express';

import getAll from "../database/module/getAll";

export const getAllProducts = function(req: Request, res: Response) {
    getAll.getAll((err: any, result: any) => {
      if (err) console.log(err);
      else res.json(result);
    });
}


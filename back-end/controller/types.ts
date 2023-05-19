import { Request, Response } from 'express';
import { types } from "../database/module/types";



const getTypes=(req: Request, res: Response)=>{
types(req.body.gender,function(err:any,result:any){
    if(err) console.log(err)
    else res.send(result)
})
}


export {getTypes}
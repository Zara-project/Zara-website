import { Request, Response } from 'express';
import {Login,SignUp } from '../database/module/users';
import bcrypt from "bcrypt"
import jsonWebToken, { Secret } from "jsonwebtoken"
import { config } from 'dotenv';
config();
const userSignUp=async function(req: Request, res: Response){
   console.log(req.body)

   try {
      console.log(req.body.password)
        const salt = await bcrypt.genSalt()
        const hashedPassword= await bcrypt.hash(req.body.password,salt)
        const user = 
           [ req.body.name,
            req.body.surname,
            req.body.email,
            hashedPassword]
            console.log(hashedPassword,salt)
         SignUp(user,function(err:any,result:any){
            if(err) console.log(err)
            else res.json(result)
         })

    } catch{
        res.status(500)
    }


}

const userLogin=async (req: Request, res: Response)=>{




      Login(req.body,async function(err:string,result:any[]){
       console.log(result[0])
       if(err)console.log(err)
       if(result[0]===undefined) res.send('email not found')
     
      // if(req.body.email!==result[0].email)res.status(404).send("email not found")
        const email={ email: req.body.email }
         if(err)console.log(err)
         else try{
            // console.log(req.body.password)
            // console.log(result[0].password,"res")
         
           if (await bcrypt.compare(req.body.password,result[0].password)){  //you need to complete the fact that the user may enter a wrong email
            
            const accsessToken= jsonWebToken.sign(email ,process.env.ACCESS_TOKEN_SECRET as Secret)
           
            res.send({...result[0],accsessToken:accsessToken})
           }else{
            res.send("wrong password")
            console.log('no')
           }
          
         }  
         catch{
            res.status(500)
         }
      })
   }



export  {userSignUp, userLogin}
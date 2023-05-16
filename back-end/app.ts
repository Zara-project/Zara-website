import express, { Request, Response} from "express";

import router from "./routes/index";
const port:number=3000

const app=express()

app.get("/",(req: Request, res: Response)=>{
  res.send("hello")
})

app.use("/",router)

app.listen(port,()=>{
  console.log(`server is listening at port${port} `)
})
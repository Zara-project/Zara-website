import express, { Request, Response} from "express";
import cors from "cors"
import routerI from "./routes/index";
import routerU from "./routes/users";
import authenticate from './authentication/authenticate';

const port:number=5000

const app=express()
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cors());

app.post("/",authenticate,(req: Request, res: Response)=>{
  res.send("hello")
}) 




app.use("/",routerI)
app.use("/",routerU)

app.listen(port,()=>{
  console.log(`server is listening at port${port} `)
})
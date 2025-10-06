import express, { Request, Response } from "express";
import { logger } from "./middlewares/logger";
import userRoutes from "./routes/useRoutes";


const app = express();
app.use(logger);
app.use("/users", userRoutes);
app.get('/', (req:Request, res:Response)=>{
    res.send("Hello world!")
})

app.listen(3000 ,()=>{
    console.log('Servidor rodando na porta 3000');
})

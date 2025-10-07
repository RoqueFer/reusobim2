import express, { Request, Response } from "express";
import { logger } from "./middlewares/logger";
import userRoutes from "./routes/useRoutes";
import morgan from 'morgan';
import productRoutes from './routes/productRoutes';


const app = express();
const port = 3000;
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);
app.use("/users", userRoutes);
app.use('/products', productRoutes);
app.get('/', (req:Request, res:Response)=>{
    res.send("Hello world!")
})

app.listen(port ,()=>{
    console.log('Servidor rodando na porta ${port}');
})

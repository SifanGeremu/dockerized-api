import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT||3000;

//middlewares

app.use(express.json());
app.use(cors());

//routes
app.get('/',(req,res)=>{
    res.send('hello dockerized api');
})
//error handling middlewares 

//server running 
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})


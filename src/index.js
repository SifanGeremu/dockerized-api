import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.send('hello dockerized api');
});

//server running
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});

//database test
pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Database connected:", result.rows);
    }
});
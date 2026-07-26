import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/', routes);

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        message: 'Internal server error',
    });
});

//server running
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});
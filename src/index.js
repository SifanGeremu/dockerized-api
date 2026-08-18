import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});
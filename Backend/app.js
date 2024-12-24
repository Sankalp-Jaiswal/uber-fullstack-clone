import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import connectDB from './db/db.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/users', userRoutes);

export default app;

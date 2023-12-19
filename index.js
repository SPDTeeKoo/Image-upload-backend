import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import momentRoutes from './routes/momentRoute.js';
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/auth', authRoutes);
app.use('/moment', momentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

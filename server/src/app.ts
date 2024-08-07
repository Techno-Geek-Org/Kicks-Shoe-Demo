import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth_routes';
import { authMiddleware } from './middleware/middleware';

dotenv.config();

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/api/auth', authRoutes);

// Example protected route using the auth middleware
app.use('/api/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || '', {
    // Omit deprecated options
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    if (err instanceof Error) {
        console.error('Failed to connect to MongoDB', err.message);
    } else {
        console.error('Unexpected error:', err);
    }
});

export default app;

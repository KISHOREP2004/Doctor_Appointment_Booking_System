import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../config/mongodb.js';
import connectCloudinary from '../config/cloudinary.js';
import adminRouter from '../routes/adminRoute.js';
import doctorRouter from '../routes/doctorRoute.js';
import userRouter from '../routes/userRoute.js';

const app = express();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(
  cors({
    origin: 'https://doctor-appointment-booking-system-admin.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

// Database and Cloudinary setup
connectDB();
connectCloudinary();

// API routes
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API working...');
});

// Export the app for Vercel's serverless function handler
export default app;

import mongoose from 'mongoose';
import app from './app'; 
import dotenv from 'dotenv';
import connectDB from '../DB/connectDB';
dotenv.config();

connectDB()
.then(() => {

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => console.error('MongoDB connection error:', err));
 
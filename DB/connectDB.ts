import mongoose from 'mongoose';

// Database Connection Code
const connectDB = async () => {
  try {

    await mongoose.connect(`${process.env.DATABASE_URL}`);
    
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}; 

export default connectDB;

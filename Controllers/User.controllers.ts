import { Request, Response } from 'express';
import User from '../Models/Users.Model';

// to get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}).select('-password'); 
    res.status(200).json(users); 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

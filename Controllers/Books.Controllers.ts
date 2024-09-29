import { Request, Response } from 'express';
import Book from '../Models/Book.Model';

// To search Bokk By Name
const searchBooksByName = async (req: Request, res: Response) => {
  const { bookName } = req.body;
  const books = await Book.find({ bookName});
  res.json(books);
};

// To Search Book by Book Rent
const searchBooksByRent = async (req: Request, res: Response) => {
  const { minRent, maxRent } = req.body;
  const books = await Book.find({ rentPerDay: { $gte: minRent, $lte: maxRent } });
  res.json(books);
};

// TO Search Book By Category + BookName + BookRent
const searchBooksByCategoryNameRent = async (req: Request, res: Response) => {
  const { category, bookName, minRent, maxRent } = req.body;
  const books = await Book.find({
    category,
    bookName,
    rentPerDay: { $gte: minRent, $lte: maxRent },
  });
  res.json(books);
};

// To get All Books
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find({});
    return res.status(200).json(books); 
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export  {
  searchBooksByName,
  searchBooksByRent,
  searchBooksByCategoryNameRent,
  getAllBooks
};

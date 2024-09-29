import { Request, Response } from 'express';
import Transaction from '../Models/Transactions.Model';
import Book from '../Models/Book.Model';
import User from '../Models/Users.Model';

// TO Issue Book
const issueBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { bookName, userName, issueDate } = req.body;

    const userExists = await User.findOne({ userName });
    if (!userExists) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const bookExists = await Book.findOne({ bookName: bookName }); 
    if (!bookExists) {
      res.status(404).json({ message: 'Book not found' });
      return; 
    }

    const newTransaction = new Transaction({
      bookName: bookExists.bookName,
      userName: userExists.userName,
      issueDate: new Date(issueDate),
    });

    await newTransaction.save();
    res.status(200).json({ message: 'Book issued successfully' });
  } catch (error) {
    console.error('Error issuing book:', error);
    res.status(500).json({ error: 'An error occurred while issuing the book' });
  }
};

const returnBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { bookName, userName, returnDate } = req.body;

    const user = await User.findOne({ userName });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const book = await Book.findOne({ bookName : bookName }); 
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }


    const transaction = await Transaction.findOne({
      bookName: book.bookName,
      userName: user.userName,
      returnDate: null,
    });

    if (!transaction) {
      res.status(404).json({ message: 'Transaction not found' });
      return;
    }

    // Calculate total rent
    const issueDate = transaction.issueDate;
    const daysRented = Math.ceil(
      (new Date(returnDate).getTime() - issueDate.getTime()) / (1000 * 3600 * 24)
    );

    const totalRent = daysRented * book.rentPerDay;
    transaction.returnDate = new Date(returnDate);
    transaction.totalRent = totalRent;

    // Save transaction
    await transaction.save();

    res.status(200).json({ message: 'Book returned successfully', transaction });
  } catch (error) {
    console.error('Error returning book:', error);
    res.status(500).json({ error: 'An error occurred while returning the book' });
  }
};

// To Get history of Book
const getTransactionHistory = async (req: Request, res: Response) => {
  const { bookName } = req.body;

  try {
    const book = await Book.findOne({ bookName: bookName });

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    }
    else{

      const transactionData = await Transaction.find({ bookName: bookName});
      const transactions = await Transaction.find({ 
        bookName: bookName, 
        returnDate: { $ne: null }  
      });
      const currentlyIssued = transactionData.find(t => !t.returnDate);
      const totalCount = transactionData.length;
      const totalRent = transactionData.reduce((acc, curr) => acc + (curr.totalRent || 0), 0);
      console.log(totalRent)
  
      res.status(200).json({
        totalCount,
        currentlyIssued,
        transactions,
        totalRent
      });
    }


  } catch (error) {
    res.status(500).json({ message: 'Error fetching transaction history'});
  }
};


// Get list of books issued to a person
const getBooksIssuedToUser = async (req: Request, res: Response) => {
  const { userName } = req.body;
  console.log(userName);
  const transactions = await Transaction.find({ userName : userName });
  console.log(transactions)
  res.status(200).json(transactions);
}; 

// Get list of books issued in a date range
const getBooksIssuedInDateRange = async (req: Request, res: Response) => {
  const { startDate, endDate } = req.body;

  const transactions = await Transaction.find({
    issueDate: { $gte: new Date(startDate), $lte: new Date(endDate) }
  }).populate('userName'); 
  console.log(transactions) 

  res.status(200).json(transactions);
};


export {
    issueBook,
    returnBook,
    getTransactionHistory,
    getBooksIssuedToUser,
    getBooksIssuedInDateRange
  };
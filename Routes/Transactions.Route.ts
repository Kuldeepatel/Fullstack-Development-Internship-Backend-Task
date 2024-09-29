import { Router } from 'express';
import {
  issueBook,
  returnBook,
  getTransactionHistory,
  getBooksIssuedToUser,
  getBooksIssuedInDateRange
} from '../Controllers/Transactions.Controller';

const router = Router();

// Define routes
router.post('/bookissue', issueBook);
router.post('/return', returnBook);
router.post('/bookhistory', getTransactionHistory);

router.post('/userhistory', getBooksIssuedToUser);
router.post('/date-range', getBooksIssuedInDateRange);

export default router;

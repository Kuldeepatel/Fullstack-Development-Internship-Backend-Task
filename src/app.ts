import express from 'express';
import bookRoute from '../Routes/Books.Route';
import transactionRoute from '../Routes/Transactions.Route';
import userRoute from '../Routes/User.Route';
const app = express();
import cors from 'cors'; 

// Middleware 
app.use(cors());
app.use(express.json());

// Book Route
app.use('/api/books', bookRoute);

// Transation Route
app.use('/api/transactions', transactionRoute);

// User Route
app.use('/api/users',userRoute);

export default app; 

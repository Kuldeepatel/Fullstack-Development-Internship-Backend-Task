import mongoose, { Document, Schema } from 'mongoose';

export interface TransactionDocument extends Document {
  bookName: string;
  userName: string;
  issueDate: Date;
  returnDate?: Date;
  totalRent?: number;
}

const transactionSchema = new Schema({
  bookName: { 
    type: String, 
    required: true 
  },
  userName: { 
    type: String, 
    required: true 
  },
  issueDate: { 
    type: Date, 
    required: true 
  },
  returnDate: { 
    type: Date 
  },
  totalRent: { 
    type: Number 
  },
});

const TransactionModel = mongoose.model<TransactionDocument>('Transaction', transactionSchema);

export default TransactionModel;

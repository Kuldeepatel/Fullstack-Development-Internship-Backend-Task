import mongoose, { Document, Schema } from 'mongoose';
export interface BookDocument extends Document {
  bookName: string;      
  category: string;     
  rentPerDay: number;   
}

const bookSchema = new Schema({
  bookName: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  rentPerDay: { 
    type: Number, 
    required: true 
  },
});

const BookModel = mongoose.model<BookDocument>('Book', bookSchema);
export default BookModel;

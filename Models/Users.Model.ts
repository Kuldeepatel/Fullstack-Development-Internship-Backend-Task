import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;

import mongoose from "mongoose";
import bcyrpt from 'bcyrpt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcyrpt.compareSync(password, hashPassword);
};
import { Schema, model, models } from "mongoose";

// export interface IImage extends Document {
//     clerkId: string;
//     email: string;
//     username: string;
//     photo: string;
//     firstName: string;
//     lastName: string;
//     planId: string;
//     creditBalance: number;
    
// }

const TransactionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    stripeId: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    plan: {
        type: String,
    },
    credits: {
        type: Number,
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const Transaction = models?.Transaction || model('Transaction', TransactionSchema);

export default Transaction;
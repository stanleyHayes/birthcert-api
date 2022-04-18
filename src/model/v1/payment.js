const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    provider: {
        type: String,
        required: true,
        trim: true,
        enum: ['AirtelTigo', 'Vodafone Cash', 'Momo', 'Free']
    },
    transaction_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed'],
        default: 'pending'
    }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

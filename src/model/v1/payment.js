const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    amount: {
        type: Number,
        min: 0
    },
    phone: {
        type: String,
        trim: true,
    },
    provider: {
        type: String,
        required: true,
        trim: true,
        enum: ['AirtelTigo', 'Vodafone Cash', 'Momo', 'Waived']
    },
    transaction_id: {
        type: String,
        trim: true,
        lowercase: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Waived'],
        default: 'Pending'
    }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

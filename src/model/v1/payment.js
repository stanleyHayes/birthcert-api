const mongoose = require("mongoose");
const validator = require("validator");

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
        lowercase: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error(`Invalid phone ${value}`);
            }
        }
    },
    provider: {
        type: String,
        required: true,
        trim: true,
        enum: ['AirtelTigo', 'Vodafone Cash', 'Momo']
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

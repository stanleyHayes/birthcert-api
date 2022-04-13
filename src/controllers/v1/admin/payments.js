const Payment = require("../../../model/v1/payment");
exports.createPayment = (req, res) => {
    try {
        res.status(201).json({message: 'Payment created', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getPayments = async (req, res) => {
    try {
        const match = {};
        const page = req.query.page;
        const limit = req.query.size;
        const skip = (page - 1) * limit;
        if (req.query.status) {
            match['status'] = req.query.status;
        }
        const payments = await Payment.find(match).skip(skip).limit(limit).sort({created_at: -1});
        const totalPayments = await Payment.find(match);
        res.status(200).json({message: 'Payments retrieved', data: payments, totalPayments});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.updatePayment = (req, res) => {
    try {
        res.status(200).json({message: 'Payment updated', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getPayment = (req, res) => {
    try {
        res.status(200).json({message: 'Payment retrieved', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

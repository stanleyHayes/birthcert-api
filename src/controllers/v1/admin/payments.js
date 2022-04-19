const Payment = require("../../../model/v1/payment");

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
        const totalPayments = await Payment.find(match).countDocuments();
        res.status(200).json({message: 'Payments retrieved', data: payments, count: totalPayments});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if(!payment) return res.status(404).json({message: 'Payment not found'});
        const updates = Object.keys(req.body);
        const allowedUpdates = ['status'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if(!isAllowed) return res.status(400).json({message: 'Updates not allowed'});
        for (let key of updates){
            payment[key] = req.body[key];
        }
        await payment.save();
        res.status(200).json({message: 'Payment updated', data: payment});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getPayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if(!payment) return res.status(404).json({message: 'Payment not found'});
        res.status(200).json({message: 'Payment retrieved', data: payment});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

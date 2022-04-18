const Payment = require("./../model/v1/payment");

const createPayment = async (name, phone, transaction_id, amount, provider) => {
    const existingPayment = await Payment.findOne({transaction_id});
    if(existingPayment) return {success: false, data: null, message: 'Transaction id already present', code: 409};
    const payment = await Payment.create({name, phone, transaction_id, amount, provider});
    return {success: true, data: payment, message: 'Payment recorded successfully', code: 200};
}

const getPayment = async (id) => {
    const payment = await Payment.findById(id);
    if(!payment) return {success: false, data: null, message: 'Payment not found', code: 404};
    return {success: true, data: payment, message: 'Payment retrieved successfully', code: 200};
}

const updatePayment = async (id, update) => {
    const payment = await getPayment(id);
    const updates = Object.keys(update);
    const allowedUpdates = ['status', 'transaction_id', 'phone', 'name', 'provider'];
    const isAllowed = updates.every(update => allowedUpdates.includes(update));
    if(!isAllowed) return {success: false, message: 'Update not allowed', data: null, code: 400};
    for (let key of updates){
        payment[key] = updates[key]
    }
    await payment.save();
    return {success: true, data: payment, message: 'Payment retrieved successfully', code: 200};
}

module.exports = {createPayment, getPayment, updatePayment};

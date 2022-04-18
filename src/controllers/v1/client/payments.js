const payments = require("./../../../dao/payments");

exports.createPayment = async (req, res) => {
    try {
        const {name, phone, amount, transaction_id, provider} = req.body;
        const {
            message,
            code,
            success,
            data
        } = await payments.createPayment(name, phone, transaction_id, amount, provider)
        res.status(code).json({message, data, success});
    } catch (e) {
        console.log(e.message)
        res.status(500).json({message: e.message});
    }
}

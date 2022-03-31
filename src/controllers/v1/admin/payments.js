exports.createPayment = (req, res) => {
    try {
        res.status(201).json({message: 'Payment created', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getPayments = (req, res) => {
    try {
        res.status(200).json({message: 'Payment retrieved', data: {}});
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


exports.getPayments = (req, res) => {
    try {
        res.status(200).json({message: 'Payments retrieved', data: {}});
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

const Request = require("./../../../model/v1/request");
const Payment = require("./../../../model/v1/payment");

exports.getDashboard = async (req, res) => {
    try {
        const completedRequests = await Request.find({status: 'completed'}).countDocuments();
        const pendingRequests = await Request.find({status: 'pending'}).countDocuments();
        const deliveredRequests = await Request.find({status: 'delivered'}).countDocuments();

        const verifiedPayment = await Payment.find({status: 'verified'}).countDocuments();
        const waivedPayment = await Payment.find({status: 'waived'}).countDocuments();
        const pendingPayment = await Payment.find({status: 'pending'}).countDocuments();

        res.status(200).json({
            data: {
                request: {
                    completed: completedRequests,
                    pending: pendingRequests,
                    delivered: deliveredRequests
                },
                payment: {
                    verified: verifiedPayment,
                    waived: waivedPayment,
                    pending: pendingPayment
                }
            }
        });
    } catch (e) {
        console.log(e.message, 'error')
        res.status(500).json({message: e.message});
    }
}

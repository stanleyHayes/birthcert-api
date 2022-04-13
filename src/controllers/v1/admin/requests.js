const Request = require("./../../../model/v1/request");

exports.createRequest = (req, res) => {
    try {
        res.status(201).json({message: 'Request created', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getRequest = (req, res) => {
    try {
        res.status(200).json({message: 'Request retrieved', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.updateRequest = (req, res) => {
    try {
        res.status(200).json({message: 'Request updated', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getRequests = async (req, res) => {
    try {
        const match = {};
        const page = req.query.page;
        const limit = req.query.size;
        const skip = (page - 1) * limit;
        if (req.query.status) {
            match['status'] = req.query.status;
        }
        const requests = await Request.find(match).skip(skip).limit(limit).sort({created_at: -1});
        const totalRequests = await Request.find(match);
        res.status(200).json({message: 'Requests retrieved', data: requests, totalRequests});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.deleteRequest = (req, res) => {
    try {
        res.status(200).json({message: 'Admin deleted', data: {}});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const Request = require("./../../../model/v1/request");

exports.getRequest = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);
        if(!request) return res.status(404).json({message: 'Request not found'});
        res.status(200).json({message: 'Request retrieved', data: request});
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

exports.updateRequest = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);
        if(!request) return res.status(404).json({message: 'Request not found'});
        const updates = Object.keys(req.body);
        const allowedUpdates = ['status'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if(!isAllowed) return res.status(400).json({message: 'Updates not allowed'});
        for(let key of updates){
            request[key] = req.body[key];
        }
        await request.save();
        res.status(200).json({message: 'Request retrieved', data: request});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


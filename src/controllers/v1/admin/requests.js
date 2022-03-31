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


exports.getRequests = (req, res) => {
    try {
        res.status(200).json({message: 'Requests retrieved', data: {}});
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

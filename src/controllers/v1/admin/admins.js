exports.createAdmin = (req, res) => {
    try {
        res.status(201).json({message: 'Admin created', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.getAdmin = (req, res) => {
    try {
        res.status(200).json({message: 'Admin retrieved', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.updateAdmin = (req, res) => {
    try {
        res.status(200).json({message: 'Admin updated', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

exports.getAdmins = (req, res) => {
    try {
        res.status(200).json({message: 'Admins retrieved', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


exports.suspendAdmin = (req, res) => {
    try {
        res.status(200).json({message: 'Admin suspended', data: {}});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

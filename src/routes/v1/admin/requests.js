const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {
    createRequest,
    deleteRequest,
    getRequest,
    getRequests,
    updateRequest
} = require("../../../controllers/v1/admin/requests");

const router = express.Router({mergeParams: true});

router.route("/")
    .post(authenticate, createRequest)
    .get(authenticate, getRequests);

router.route('/:id').get(authenticate, getRequest).put(authenticate, updateRequest).delete(authenticate, deleteRequest);

module.exports = router;

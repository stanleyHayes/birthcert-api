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

router.route("/").post(createRequest).get(getRequests);

router.route('/:id').get(getRequest).put(updateRequest).delete(deleteRequest);

module.exports = router;

const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {
    getRequest,
    getRequests,
} = require("../../../controllers/v1/admin/requests");

const router = express.Router({mergeParams: true});

router.route("/").get(getRequests);

router.route('/:id').get(getRequest);

module.exports = router;

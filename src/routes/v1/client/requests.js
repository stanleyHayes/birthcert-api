const express = require("express");
const {createRequest} = require("../../../controllers/v1/client/requests");

const router = express.Router({mergeParams: true});

router.route("/").post(createRequest);

module.exports = router;

const express = require("express");
const {createPayment} = require("../../../controllers/v1/client/payments");

const router = express.Router({mergeParams: true});

router.route("/").post(createPayment);

module.exports = router;

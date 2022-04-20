const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {getPayments, updatePayment, getPayment} = require("../../../controllers/v1/admin/payments");

const router = express.Router({mergeParams: true});

router.route("/").get(authenticate, getPayments);

router.route('/:id').get(authenticate, getPayment).put(authenticate, updatePayment);

module.exports = router;

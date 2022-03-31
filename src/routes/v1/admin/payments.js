const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {getPayments, createPayment, updatePayment, getPayment} = require("../../../controllers/v1/admin/payments");

const router = express.Router({mergeParams: true});

router.route("/")
    .post(authenticate, createPayment)
    .get(authenticate, getPayments);

router.route('/:id').get(authenticate, getPayment).put(authenticate, updatePayment);

module.exports = router;

const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {getPayments, updatePayment, getPayment} = require("../../../controllers/v1/admin/payments");

const router = express.Router({mergeParams: true});

router.route("/").get(getPayments);

router.route('/:id').get(getPayment).put(updatePayment);

module.exports = router;

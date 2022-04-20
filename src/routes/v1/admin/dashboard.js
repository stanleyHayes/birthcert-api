const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {
    getDashboard
} = require("../../../controllers/v1/admin/dashboard");

const router = express.Router({mergeParams: true});

router.route("/").get(authenticate, getDashboard);

module.exports = router;

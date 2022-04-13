const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {createAdmin, getAdmins, getAdmin, updateAdmin, suspendAdmin} = require("../../../controllers/v1/admin/admins");

const router = express.Router({mergeParams: true});

router.route("/").post(createAdmin).get(getAdmins);

router.route('/:id').get(getAdmin).put(updateAdmin).delete(suspendAdmin);

module.exports = router;

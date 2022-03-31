const express = require("express");
const {authenticate} = require("../../../middleware/v1/auth");
const {deleteClient, createClient, getClients, getClient} = require("../../../controllers/v1/admin/clients");

const router = express.Router({mergeParams: true});

router.route("/")
    .post(authenticate, createClient)
    .get(authenticate, getClients);

router.route('/:id').get(authenticate, getClient).delete(authenticate, deleteClient);

module.exports = router;

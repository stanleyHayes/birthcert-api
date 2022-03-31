const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const birthCertificateSchema = new Schema({

}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const BirthCertificate = mongoose.model('BirthCertificate', birthCertificateSchema);

module.exports = BirthCertificate;

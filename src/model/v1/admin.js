const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid email ${value}`);
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error(`Invalid phone ${value}`);
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error(`Password must contain at least a digit, uppercase, lowercase, special character and at least 8 characters long`);
            }
        }
    },
    authInfo: {
        otp: {
            type: String,
            minlength: 4
        },
        otpValidUntil: {
            type: Date
        },
        token: {
            type: String,
        }
    },
    status: {
        type: String,
        enum: ['active', 'suspended', 'pending'],
        status: 'pending'
    },
    devices: {
        type: [{
            token: {
                type: String,
                required: true,
                validate(value){
                    if(!validator.isJWT(value)){
                        throw new Error(`${value} is not a valid token`)
                    }
                }
            },
            ip: {
                type: String,
                validate(value){
                    if(!validator.isIP(value)){
                        throw new Error(`${value} is not a valid IP address`)
                    }
                }
            },
            browser: {
                type: String,
                required: true,
            },
            platform: {
                type: String,
                required: true,
            },
            isMobile: {
                type: Boolean,
                required: true,
            },
            isDesktop: {
                type: Boolean,
                required: true,
            },
            os: {
                type: String,
                required: true,
            }
        }]
    },
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

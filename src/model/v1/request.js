const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const requestSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    middle_name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    date_of_birth: {
        type: Date,
        required: true,
        trim: true
    },
    sex: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
        trim: true
    },
    place_of_birth: {
        type: String,
        required: true,
        trim: true
    },
    mother_maiden_name: {
        type: String,
        required: true,
        trim: true
    },
    age_of_mother: {
        type: String,
        required: true,
    },
    mother_level_of_education: {
        type: String,
        required: true,
        trim: true
    },
    mother_occupation: {
        type: String,
        required: true,
        trim: true
    },
    mother_nationality: {
        type: String,
        required: true,
        trim: true
    },
    name_of_father: {
        type: String,
        required: true,
        trim: true
    },
    age_of_father: {
        type: String,
        required: true
    },
    father_level_of_education: {
        type: String,
        required: true,
        trim: true
    },
    father_occupation: {
        type: String,
        required: true,
        trim: true
    },
    father_nationality: {
        type: String,
        required: true,
        trim: true
    },
    telephone_number: {
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
    house_number: {
        type: String,
        required: true,
        trim: true
    },
    religion: {
        type: String,
        required: true,
        trim: true
    },
    full_name_of_informant: {
        type: String,
        required: true,
        trim: true
    },
    contact_name: {
        type: String,
        required: true,
        trim: true
    },
    contact_email: {
        type: String,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid email ${value}`);
            }
        }
    },
    contact_phone: {
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
    id_card_type: {
        type: String,
        required: true,
        trim: true,
    },
    id_card_number: {
        type: String,
        required: true,
        trim: true
    },
    date_of_baptism: {
        type: String,
    },
    place_of_baptism: {
        type: String,
    },
    baptiser: {
        type: String,
    },
    district: {
        type: String,
    },
    serial_number: {
        type: String,
    },
    registration_number: {
        type: String,
    },
    nhis_number: {
        type: String,
    },
    sickle_cell_status: {
        type: String,
    },
    birth_weight: {
        type: String,
    },
    birth_length: {
        type: String,
        required: true,

    },
    head_circumference: {
        type: String,
    },
    birth_registration: {
        type: String,
    },
    g6pd_status: {
        type: String,
    },
    gestation_age: {
        type: String,
    },
    variant: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'delivered'],
        default: 'pending'
    }
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;

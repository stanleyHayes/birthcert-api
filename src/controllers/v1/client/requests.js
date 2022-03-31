const requests = require("./../../../dao/requests");

exports.createRequest = async (req, res) => {
    try {
        const {
            first_name,
            middle_name,
            last_name,
            date_of_birth,
            sex,
            place_of_birth,
            mother_maiden_name,
            age_of_mother,
            mother_level_of_education,
            mother_occupation,
            mother_nationality,
            name_of_father,
            age_of_father,
            father_level_of_education,
            telephone_number,
            house_number,
            religion,
            full_name_of_informant,
            contact_name,
            contact_email,
            contact_phone
        } = req.body;

        const {code, data, message, success} = await requests.createRequest(
            first_name,
            middle_name,
            last_name,
            date_of_birth,
            sex,
            place_of_birth,
            mother_maiden_name,
            age_of_mother,
            mother_level_of_education,
            mother_occupation,
            mother_nationality,
            name_of_father,
            age_of_father,
            father_level_of_education,
            telephone_number,
            house_number,
            religion,
            full_name_of_informant,
            contact_name,
            contact_email,
            contact_phone
        );
        res.status(code).json({message, data, success});
    } catch (e) {
        res.status(500).json({message: e.message});
        console.log(e.message)
    }
}

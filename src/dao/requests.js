const Request = require("./../model/v1/request");

const createRequest = async (first_name,
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
                             contact_phone,
                             id_card_type,
                             id_card_number,
                             father_occupation,
                             father_nationality,
                             date_of_baptism,
                             place_of_baptism,
                             baptiser,
                             district,
                             serial_number,
                             registration_number,
                             nhis_number,
                             sickle_cell_status,
                             birth_weight,
                             birth_length,
                             head_circumference,
                             birth_registration,
                             g6pd_status,
                             gestation_age,
                             variant
                             ) => {


    const request = await Request.create({
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
        id_card_type,
        id_card_number,
        father_occupation,
        father_nationality,
        father_level_of_education,
        telephone_number,
        house_number,
        religion,
        full_name_of_informant,
        contact_name,
        contact_email,
        contact_phone,
        date_of_baptism,
        place_of_baptism,
        baptiser,
        district,
        serial_number,
        registration_number,
        nhis_number,
        sickle_cell_status,
        birth_weight,
        birth_length,
        head_circumference,
        birth_registration,
        g6pd_status,
        gestation_age,
        variant
    });
    return {data: request, message: 'Request recorded', code: 201, success: true};
}

const getRequest = async () => {

}

const updateRequest = async () => {

}

module.exports = {
    createRequest, getRequest, updateRequest
}

const { Applicant } = require('../../db')

const postApplicant = async( name, lastName, email, cellphone, registed ) =>{
    const newApplicant = await Applicant.create({name, lastName, email, cellphone, registed });

    return newApplicant;
}

module.exports = {
    postApplicant,
}
const { Applicant, Cv, Vacant, PayMethod } = require('../../db')

const postApplicant = async(name, lastName, email, password, cellphone) =>{
    const newApplicant = await Applicant.create({name, lastName, email, password, cellphone});
    //newApplicant.addCv()
    return newApplicant
}
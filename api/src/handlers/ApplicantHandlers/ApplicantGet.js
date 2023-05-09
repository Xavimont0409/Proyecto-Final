const errorUser = require('../../helpers/errors')
const { ApplicantControllerGet }= require('../../controllers/ApplicantController/ApplicantControllerGet')

const applicantHandlerGet = async(req, res) =>{
    try {
        res.status(200).json( await ApplicantControllerGet())
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    applicantHandlerGet,
}
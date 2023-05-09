const errorUser = require('../../helpers/errors')
const { allApplicant } = require('../../controllers/ApplicantController/ApplicantControllerGet')

const applicantHandlerGet = async(req, res) =>{
    try {
        res.status(200).json( await allApplicant())
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    applicantHandlerGet,
}
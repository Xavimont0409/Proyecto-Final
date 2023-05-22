const errorUser = require('../../helpers/errors');
const { allApplicant,allApplicantId } = require('../../controllers/ApplicantController/ApplicantControllerGet');

const applicantHandlerGet = async(req, res) =>{
    try {
        res.status(200).json( await allApplicant());
    } catch (error) {
        errorUser(error, res);
    }
}
const applicantHandlerGetId = async(req, res) =>{
    const { id } = req.params
    try {
        res.status(200).json(await allApplicantId(id));
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    applicantHandlerGet,
    applicantHandlerGetId
}
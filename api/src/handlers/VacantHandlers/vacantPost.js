const errorUser = require('../../helpers/errors');
const { postVacant, postVacantRelation } = require('../../controllers/VacantController/VacantPost');

const vacantHandlerPost = async(req, res) =>{
    const { title, description, CompanyId,WorkdayId, WorkMethodId, SeniorityId, creation_date } = req.body;
    title.toUpperCase();
    try {
        res.status(200).json(await postVacant(title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date ));
    } catch (error) {
        errorUser(error, res);
    }
}
const vacantHandlerPostRelation = async(req, res) =>{
    const { VacantId, ApplicantId} = req.body;
    try {
        res.status(200).json(await postVacantRelation(VacantId, ApplicantId));
    } catch (error) {
        errorUser(error, res)
    }
}

module.exports={
    vacantHandlerPost,
    vacantHandlerPostRelation
}
const errorUser = require('../../helpers/errors')
const { postVacant } = require('../../controllers/VacantController/VacantPost')

const vacantHandlerPost = async(req, res) =>{
    const { title, description, CompanyId,WorkdayId, WorkMethodId, SeniorityId } = req.body
    try {
        res.status(200).json(await postVacant(title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId ))
    } catch (error) {
        errorUser(error, res)
    }
}
module.exports={
    vacantHandlerPost
}
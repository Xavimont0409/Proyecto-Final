const errorUser = require('../../helpers/errors')
const { postVacant } = require('../../controllers/VacantController/VacantPost')

const vacantHandlerPost = async(req, res) =>{
    const { title, description, CompanyId } = req.body
    try {
        res.status(200).json(await postVacant(title, description, CompanyId))
    } catch (error) {
        errorUser(error, res)
    }
}
module.exports={
    vacantHandlerPost
}
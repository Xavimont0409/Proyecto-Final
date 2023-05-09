const errorUser = require('../../helpers/errors')
const { postVacant } = require('../../controllers/VacantController/VacantPost')

const vacantHandlerPost = async(req, res) =>{
    const { title, description } = req.body
    try {
        res.status(200).json(await postVacant(title, description))
    } catch (error) {
        errorUser(error, res)
    }
}
module.exports={
    vacantHandlerPost
}
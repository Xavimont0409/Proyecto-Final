const errorUser = require('../../helpers/errors')
const { getVacantId } = require('../../controllers/VacantController/VacantGetById')
const { getAllVacant } = require('../../controllers/VacantController/VacantGet')
const vacantHandlerGetId = async(req, res) =>{
    const { id } = req.params;
    try {
        res.status(200).json(await getVacantId(id))
    } catch (error) {
        errorUser(error, res);        
    }
}

const vacantHandlerGet = async(req, res) =>{
    try {
        res.status(200).json(await getAllVacant())
    } catch (error) {
        errorUser(error, res)
    }
}

module.exports={
    vacantHandlerGetId,
    vacantHandlerGet
}
const errorUser = require('../../helpers/errors');
const { getAllCv } = require('../../controllers/CvController/CvControllerGet');
const { getIdCv } = require('../../controllers/CvController/CvControllerGetId');

const cvHandlerGet  = async(req, res) =>{
    try {
        res.status(200).json(await getAllCv());
    } catch (error) {
        errorUser(error, res);
    }
}
const cvHandlerGetId = async(req, res) =>{
    const { id } = req.params
    try {
        res.status(200).json(await getIdCv(id));
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports= {
    cvHandlerGet,
    cvHandlerGetId
}
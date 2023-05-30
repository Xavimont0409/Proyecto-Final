const { deleteCv } = require('../../controllers/CvController/CvControllerDelete');
const errorUser = require('../../helpers/errors');

const cvHandlerDelete = async(req,res) => {
    try {
        res.status(200).json(await deleteCv(req.body));
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    cvHandlerDelete
}
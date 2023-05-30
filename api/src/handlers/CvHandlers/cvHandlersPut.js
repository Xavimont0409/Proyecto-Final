const { updateCv } = require('../../controllers/CvController/CvControllerPut');
const errorUser = require('../../helpers/errors');

const cvPutHandler = async (req, res) => {
    const body = req.body;
    try {
        res.status(200).json(await updateCv(body));
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    cvPutHandler
}
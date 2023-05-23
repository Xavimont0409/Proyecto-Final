const applicantUpdate = require("../../controllers/ApplicantController/ApplicantControllerPut");
const errorUser = require("../../helpers/errors");

const applicantHandlerPut = async (req, res) => {

    const body = req.body;
    const { id } = req.params;

    try {
        const response = await applicantUpdate(id, body);
        res.status(200).json(response);
    } catch (error) {
        errorUser(error, res);
    }
};

module.exports = {applicantHandlerPut};
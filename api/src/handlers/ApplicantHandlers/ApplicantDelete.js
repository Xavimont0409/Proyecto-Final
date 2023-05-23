const applicantDelete = require("../../controllers/ApplicantController/ApplicantControllerDelete");
const errorUser = require("../../helpers/errors");

const applicantHandlerDelete = async (req, res) => {

    const body = req.body;
    const { id } = req.params;

    try {
        const response = await applicantDelete(id, body);
        res.status(200).json(response);
    } catch (error) {
        errorUser(error, res);
    }
};

module.exports = {applicantHandlerDelete};
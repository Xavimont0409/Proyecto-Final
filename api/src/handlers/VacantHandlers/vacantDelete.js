
const vacantDelete = require("../../controllers/VacantController/VacantControllerDelete");
const errorUser = require("../../helpers/errors");

const vacantHandlerDelete = async (req, res) => {

    const body = req.body;
    const { id } = req.params;

    try {
        const response = await vacantDelete(id,body);
        res.status(200).json(response);
    } catch (error) {
        errorUser(error, res);
    }
};

module.exports = {vacantHandlerDelete};
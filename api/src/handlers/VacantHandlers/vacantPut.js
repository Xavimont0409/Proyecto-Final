
const vacantUpdate = require("../../controllers/VacantController/VacantControllerPut");
const errorUser = require("../../helpers/errors");

const vacantHandlerPut = async (req, res) => {

    const body = req.body;
    const { id } = req.params;

    try {
        const response = await vacantUpdate(id,body);
        res.status(200).json(response);
    } catch (error) {
        errorUser(error, res);
    }
};

module.exports = {vacantHandlerPut};
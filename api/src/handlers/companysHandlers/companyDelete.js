
const companyDelete = require("../../controllers/CompaniesController/CompanyControllerDelete");
const errorUser = require("../../helpers/errors");

const companyHandlerDelete = async (req, res) => {

    const body = req.body;
    const { id } = req.params;

    try {
        const response = await companyDelete(id,body);
        res.status(200).json(response);
    } catch (error) {
        errorUser(error, res);
    }
};

module.exports = {companyHandlerDelete};
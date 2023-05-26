const errorUser = require("../../helpers/errors");
const { updateCompany } = require('../../controllers/CompaniesController/CompanyControllerPut')

const companyPutHandler = async (req, res) => {
  const body = req.body;
  try {
    res.status(200).json(await updateCompany(body));
  } catch (error) {
    errorUser(error, res);
  }
};

module.exports = {
  companyPutHandler
}
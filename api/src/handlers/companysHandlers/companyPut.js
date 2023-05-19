const errorUser = require("../../helpers/errors");
const { updateCompany } = require('../../controllers/CompaniesController/CompanyControllerPut')

const companyPutHandler = async(req, res) => {
  const { id, name, business_name, ruc, cuit, country, email, password, registed } = req.body;
  console.log(id);
  try {
    res.status(200).json(await updateCompany(id, name, business_name, ruc, cuit, country, email, password, registed))
  } catch (error) {
    errorUser(error, res)
  }
};

module.exports = {
  companyPutHandler
}
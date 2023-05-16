const { Company } = require('../../db');

const postCompany = async (name, business_name, ruc, cuit, country, email, password, registed) => {
  const newCompany = await Company.create({name, business_name, ruc, cuit, country, email, password, registed});
  return newCompany;
};

module.exports = {
  postCompany,
};

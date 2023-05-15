const { Company } = require('../../db');

const postCompany = async (name, business_name, ruc, cuit, country, email, password, VacantId) => {
  const newCompany = await Company.create({name, business_name, ruc, cuit, country, email, password, VacantId});
  return newCompany;
};

module.exports = {
  postCompany,
};

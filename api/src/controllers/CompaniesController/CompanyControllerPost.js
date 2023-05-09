const { Company } = require('../../db');

const postCompany = async (name, business_name, ruc, cuit, email, password) => {
  const newCompany = await Company.create({name, business_name, ruc, cuit, email, password})
  return newCompany
};

module.exports = {
  postCompany,
};

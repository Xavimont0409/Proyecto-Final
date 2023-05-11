const { validateRequiredField } = require('../../helpers/requiredFieldsHelper');
const { validateEmailFormat } = require('../../helpers/EmailHelper');

const validateCompany = async (req, res, next) => {
  try {
    const { name, business_name, ruc, cuit, email } = req.body;
    validateRequiredField(name, 'Name');
    validateRequiredField(business_name, 'Business name');
    validateRequiredField(ruc, 'RUC');
    if (ruc.length !== 13)
    throw new Error('RUC must have 13 characters');
    validateRequiredField(cuit, 'CUIT');
    if (cuit.length !== 11)
    throw new Error('CUIT must have 11 characters');
    validateRequiredField(email, 'Email');
  const existingCompany = await Company.findOne({ where: { email } });
  if (existingCompany) 
    throw new Error('Email already in use');
    validateEmailFormat(email);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  validateCompany,
};


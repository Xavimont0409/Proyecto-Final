const { validateRequiredField } = require('../../helpers/requiredFieldsHelper');
const { validateEmailFormat } = require('../../helpers/EmailHelper');
const { validatePasswordFormat } = require('../../helpers/PasswordHelper');

const validateApplicant = async (req, res, next) => {
  try {
    const { name, lastName, email, password, cellphone } = req.body;
    validateRequiredField(name, 'Name');
    validateRequiredField(lastName, 'Last name');
    validateRequiredField(email, 'Email');
    validateEmailFormat(email);
    const existingApplicant = await Applicant.findOne({ where: { email } });
    if (existingApplicant) 
      throw new Error('Email already in use');
    validatePasswordFormat(password);
    validateRequiredField(cellphone, 'Cellphone');
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  validateApplicant,
};

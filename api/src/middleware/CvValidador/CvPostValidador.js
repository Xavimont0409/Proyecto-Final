const { validateRequiredField } = require('../../helpers/requiredFieldsHelper');

const validateCv = async (req, res, next) => {
    try {
      const { dni, name, lastName, address, profession, work_experience, personal_description, education } = req.body;
      validateRequiredField(dni , 'DNI');
      validateRequiredField(name , 'Name');
      validateRequiredField(lastName , 'Last Name');
      validateRequiredField(address , 'Address');
      validateRequiredField(profession , 'Profession');
      validateRequiredField(work_experience , 'Work experience');
      validateRequiredField(personal_description , 'Personal description');
      validateRequiredField(education , 'Education');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateCv,
  };

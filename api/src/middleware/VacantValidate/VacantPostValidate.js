const { validateRequiredField } = require('../../helpers/requiredFieldsHelper');


const validateVacant = async (req, res, next) => {
    try {
      const { title, description } = req.body;
      validateRequiredField(title , 'Title');
      validateRequiredField(description , 'Description');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateVacant,
  };
  
const { validateRequiredField } = require('../../helpers/requiredFieldsHelper');

const validateWorkMethod = async (req, res, next) => {
    try {
      const { name } = req.body;
      validateRequiredField(name , 'Name');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateWorkMethod,
  };


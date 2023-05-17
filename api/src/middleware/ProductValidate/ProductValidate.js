const { validateRequiredField } = require('../../helpers/requiredFieldsHelper.js');

const validateProduct = async (req, res, next) => {
    try {
      const { name, details, price } = req.body;
      validateRequiredField(name , 'Name');
      validateRequiredField(details , 'Details');
      validateRequiredField(price , 'Price');
      if (typeof price !== 'number' || price <= 0) {
      throw new Error('El precio debe ser un número positivo');
    }      
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateProduct,
  };
  
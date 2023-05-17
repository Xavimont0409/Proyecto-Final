const validateRequiredField = (field, fieldName) => {
    if (!field) {
      throw new Error(`${fieldName} es requerido, no puede estar vacio`);
    }
  };
  
  module.exports = {
    validateRequiredField
  };
  
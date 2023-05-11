const validateRequiredField = (field, fieldName) => {
    if (!field) {
      throw new Error(`${fieldName} is required`);
    }
  };
  
  module.exports = {
    validateRequiredField,
  };
  
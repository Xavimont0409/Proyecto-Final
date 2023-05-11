const validateEmailFormat = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  };

  module.exports = {
    validateEmailFormat,
  };
const validatePasswordFormat = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}$/;
    if (!passwordRegex.test(password)) {
      throw new Error('Invalid password format. It must be 4-16 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.');
    }
  };
  

module.exports = {
    validatePasswordFormat,
  };
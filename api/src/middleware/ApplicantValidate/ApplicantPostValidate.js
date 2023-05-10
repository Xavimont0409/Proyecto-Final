const validateApplicant = async (req, res, next) => {
    try {
      const { name, lastName, email, password, cellphone } = req.body;
      if (!name) 
        throw new Error('Name does not exist');
      if (!lastName) 
        throw new Error('Last name does not exist');
      if (!email) 
        throw new Error('Email does not exist');
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
        throw new Error('Invalid email format');
      const existingApplicant = await Applicant.findOne({ where: { email } });
      if (existingApplicant) 
        throw new Error('Email already in use');
      if (!password) 
        throw new Error('Password does not exist');
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}$/.test(password))
        throw new Error('Invalid password format. It must be 4-16 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.');
      if (!cellphone) 
          throw new Error('Cellphone does not exist');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateApplicant,
  };
  
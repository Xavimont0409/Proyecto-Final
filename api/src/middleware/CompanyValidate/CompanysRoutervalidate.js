const validateCompany = async (req, res, next) => {
    try {
      const { name, business_name, ruc, cuit, email } = req.body;
      if (!name) 
        throw new Error('Name does not exist');
      if (!business_name) 
        throw new Error('Business name does not exist');
      if (!ruc) 
        throw new Error('RUC does not exist');
      if (ruc.length !== 13)
        throw new Error('RUC must have 13 characters');
      if (!cuit) 
        throw new Error('CUIT does not exist');
      if (cuit.length !== 11)
        throw new Error('CUIT must have 11 characters');
      if (!email) 
        throw new Error('Email does not exist');
      const existingCompany = await Company.findOne({ where: { email } });
      if (existingCompany) 
        throw new Error('Email already in use');
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
        throw new Error('Invalid email format');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateCompany,
  };

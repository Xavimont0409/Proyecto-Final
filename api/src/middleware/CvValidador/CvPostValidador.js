const validateCv = async (req, res, next) => {
    try {
      const { dni, name, lastName, address, profession, work_experience, personal_description, education } = req.body;
      if (!dni)
        throw new Error('DNI does not exist');
      if (!name)
        throw new Error('Name does not exist');
      if (!lastName)
        throw new Error('Last name does not exist');
      if (!address)
        throw new Error('Address does not exist');
      if (!profession)
        throw new Error('Profession does not exist');
      if (!work_experience)
        throw new Error('Work experience does not exist');
      if (!personal_description)
        throw new Error('Personal description does not exist');
      if (!education)
        throw new Error('Education does not exist');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateCv,
  };
  
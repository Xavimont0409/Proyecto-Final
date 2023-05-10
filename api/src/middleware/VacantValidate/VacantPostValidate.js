const validateVacant = async (req, res, next) => {
    try {
      const { title, description } = req.body;
      if (!title) 
        throw new Error('Title does not exist');
      if (!description) 
        throw new Error('Description does not exist');
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  module.exports = {
    validateVacant,
  };
  
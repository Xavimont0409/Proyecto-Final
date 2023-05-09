const { Applicant } = require('../models/Applicant');

const createApplicant = async (req, res) => {
    try {
      const { name, lastName, email, cellphone } = req.body;
      const applicant = await Applicant.create({ name, lastName, email, cellphone });
      res.status(201).json(applicant);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createApplicant,
};
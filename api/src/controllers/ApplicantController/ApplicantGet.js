const { Applicant } = require('../models/Applicant');

const getApplicants = async (req, res) => {
    try {
      const applicants = await Applicant.findAll();
      res.status(200).json(applicants);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getApplicants
};
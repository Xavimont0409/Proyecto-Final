const { Cv } = require('../models/Cv');

const createCv = async (req, res) => {
    try {
      const { dni, name, lastName, address, photo, profesion, github, linkedin, work_experience, personal_description, education } = req.body;
      const cv = await Cv.create({ dni, name, lastName, address, photo, profesion, github, linkedin, work_experience, personal_description, education });
      res.status(201).json(cv);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createCv,
};
const { Cv } = require('../../db');

const createCv = async (dni, name, lastName, address, photo, profession, github, linkedin, work_experience, personal_description, education, ApplicantId) => {
  const newCv = await Cv.create({ dni, name, lastName, address, photo, profession, github, linkedin,  work_experience, personal_description, education, ApplicantId });

  return newCv
};

module.exports = {
  createCv,
};
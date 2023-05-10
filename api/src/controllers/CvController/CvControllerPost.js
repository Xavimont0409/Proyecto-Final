const { Cv } = require('../../db');

const createCv = async (dni, name, lastName, address, photo, profesion, github, linkedin, work_experience, personal_description, education) => {
  const newCv = await Cv.create({dni, name, lastName, address, photo, profesion, github, linkedin, work_experience, personal_description, education})
  return newCv
};

module.exports = {
  createCv,
};
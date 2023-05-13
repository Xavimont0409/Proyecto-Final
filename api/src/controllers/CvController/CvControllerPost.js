const { Cv } = require("../../db");

const createCv = async (
  dni,
  phone,
  address,
  photo,
  profession,
  linkedin,
  personal_description,
  skill,
  country,
  educational_institution,
  state,
  initial_date,
  finish_date,
  ApplicantId
) => {
  const newCv = await Cv.create({
    dni,
    phone,
    address,
    photo,
    profession,
    linkedin,
    personal_description,
    skill,
    country,
    educational_institution,
    state,
    initial_date,
    finish_date,
    ApplicantId,
  });

  return newCv;
};

module.exports = {
  createCv,
};

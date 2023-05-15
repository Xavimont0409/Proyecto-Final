const { Experience } = require("../../db");

const createExperience = async (
  company,
  charge,
  experience_level,
  location,
  start_date,
  end_date,
  still_working,
  CvId
) => {
  const newExperience = await Experience.create({
    company,
    charge,
    experience_level,
    location,
    start_date,
    end_date,
    still_working,
    CvId
  });
  return newExperience;
};

module.exports={
  createExperience
}

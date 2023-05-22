const { Formation } = require("../../db");

const createFormation = async (
  title,
  country,
  study_level,
  study_area,
  institute,
  state,
  start_date,
  end_date,
  CvId
) => {
  const newFormation = await Formation.create({
    title,
    country,
    study_level,
    study_area,
    institute,
    state,
    start_date,
    end_date,
    CvId,
  });
  return newFormation;
};

module.exports = { 
  createFormation 
};

const { Applicant, Cv, Vacant } = require("../../db");

const allApplicant = async () => {
  return await Applicant.findAll({ include: [
    { model: Cv },{model:Vacant}
  ] });
};
const allApplicantId = async (id) => {
  return await Applicant.findByPk(id,{
    include: [{ model: Cv },{model:Vacant}],
  });
};

module.exports = {
  allApplicant,
  allApplicantId,
};

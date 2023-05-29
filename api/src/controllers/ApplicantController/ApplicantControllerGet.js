const { Applicant, Cv, Vacant, PayMethod } = require("../../db");

const allApplicant = async () => {
  return await Applicant.findAll({ include: [
    { model: Cv },{model:Vacant},{model:PayMethod}
  ] });
};
const allApplicantId = async (id) => {
  return await Applicant.findByPk(id,{
    include: [{ model: Cv },{model:Vacant},{model:PayMethod}],
  });
};

module.exports = {
  allApplicant,
  allApplicantId,
};

const { Applicant, Cv, Vacant, PayMethod, Experience, Formation } = require("../../db");

const allApplicant = async () => {
  return await Applicant.findAll({ include: [
    { model: Cv,include :[{model: Experience},{model: Formation}] },{model:Vacant},{model:PayMethod}
  ] });
};
const allApplicantId = async (id) => {
  return await Applicant.findByPk(id,{
    include: [{ model: Cv,include :[{model: Experience},{model: Formation}] },{model:Vacant},{model:PayMethod}],
  });
};

module.exports = {
  allApplicant,
  allApplicantId,
};

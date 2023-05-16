const { Applicant, Cv, State } = require("../../db");

const allApplicant = async () => {
  return await Applicant.findAll({ include: [
    { model: Cv },
    { model: State }
  ] });
};
const allApplicantId = async (id) => {
  return await Applicant.findAll({
    include: [{ model: Cv }, { model: State }],
    where: { id: id },
  });
};

module.exports = {
  allApplicant,
  allApplicantId,
};

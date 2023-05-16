const { Applicant, Cv, State } = require("../../db");

const allApplicant = async () => {
  return await Applicant.findAll({ include: [
    { model: Cv },
  ] });
};
const allApplicantId = async (id) => {
  return await Applicant.findAll({
    include: [{ model: Cv }],
    where: { id: id },
  });
};

module.exports = {
  allApplicant,
  allApplicantId,
};

const { Applicant, Company, Cv, Vacant, Workday, WorkMethod, Seniority } = require("../../db");

const getEmail = async (email) => {
  const findEmailApplicant = await Applicant.findAll({
    where: { email },
    include: [{ model: Cv }],
  });
  const findEmailCompany = await Company.findAll({
    where: { email },
    include: [
      {
        model: Vacant,
        attributes: ["title", "description"],
        include: [
          {
            model: Workday,
            attributes: ["name"],
          },
          {
            model: WorkMethod,
            attributes: ["name"],
          },
          {
            model: Seniority,
            attributes: ["name"],
          },
        ],
      },
    ],
  });

  return [...findEmailApplicant, ...findEmailCompany];
};

module.exports = {
  getEmail,
};

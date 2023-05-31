const { Applicant, Company, Cv,Experience, Formation, Vacant, Workday, WorkMethod, Seniority, PayMethod, Star } = require("../../db");

const getEmail = async (email) => {
  const findEmailApplicant = await Applicant.findAll({
    where: { email },
    include: [
      { model: Cv,include :[{model: Experience},{model: Formation}] },{model:Vacant},{model:PayMethod}
    ]
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
      {
        model: Star,
        attributes: ["id", "stars", "text"],
      },
      { model: PayMethod },
    ],
  });

  return [...findEmailApplicant, ...findEmailCompany];
};

module.exports = {
  getEmail,
};

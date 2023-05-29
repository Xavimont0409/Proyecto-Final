const {
  Applicant,
  Cv,
  Vacant,
  Company,
  Workday,
  WorkMethod,
  Seniority,
  Star,
  PayMethod
} = require("../../db");

const getUserApplicant = async (email, password) => {
  const findApplicant = await Applicant.findAll({
    where: { email: email, password: password },
    include: [{ model: Cv }, { model: Vacant },{model:PayMethod}],
  });

  return findApplicant;
};
const getUserComany = async(email, password) =>{
  const findCompany = await Company.findAll({
    where: { email: email, password: password },
    include: [
      {
        model: Vacant,
        attributes: ["id","title", "description","createdAt"],
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
        attributes: ["stars", "text"]
      },
      {model:PayMethod}
    ],
  });
  return findCompany
}

module.exports = {
  getUserApplicant,
  getUserComany
};

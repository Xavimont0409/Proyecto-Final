const {
  Company,
  Vacant,
  Workday,
  WorkMethod,
  Seniority,
  Star
} = require("../../db");

const updateCompany = async (body) => {

  let response = {};

  const { Stars, id, ...companyData } = body;
  await Company.update(companyData, {
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
      { model: Star }
    ],
    where: { id: id }
  }).then(async (num) => {
    if (num == 1) {
      response = body;
      const StarsId = Stars.map(Star => Star.id);

      const company = await Company.findByPk(id);

      await company.setStars(StarsId);
    }
  });

  return response;
};


module.exports = {
  updateCompany
}

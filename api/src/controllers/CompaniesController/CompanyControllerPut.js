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
      response = { id, ...companyData };

      const company = await Company.findByPk(id);

      const companyStars = await company.getStars();

      const starsToDelete = (companyStars.filter(
        companyStar => !Stars.includes(companyStar.id)
      ));

      for (const star of starsToDelete) {
        await Star.destroy({ where: { id: star.id } });
      }

      await company.removeStars(starsToDelete);
    }
  });

  return response;
};


module.exports = {
  updateCompany
}

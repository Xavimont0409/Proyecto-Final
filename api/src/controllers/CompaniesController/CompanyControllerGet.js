const {
  Company,
  Vacant,
  Workday,
  WorkMethod,
  Seniority,
  State,
} = require("../../db");

const getAllCompany = () => {
  return Company.findAll({
    include: [
      {
        model: State,
      },
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
};

const getCompanyId = (id) => {
  return Company.findAll({
    where: { id },
    include: [
      {
        model: State,
      },
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
};
module.exports = {
  getAllCompany,
  getCompanyId,
};

const {
  Company,
  Vacant,
  Workday,
  WorkMethod,
  Seniority,
  Star
} = require("../../db");

const getAllCompany = () => {
  return Company.findAll({
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
        attributes: ["id","stars","text"]
      }
    ],
  });
};

const getCompanyId = (id) => {
  return Company.findByPk(id,{
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
        attributes: ["id","stars", "text"]
      }
    ],
  });
};
module.exports = {
  getAllCompany,
  getCompanyId,
};

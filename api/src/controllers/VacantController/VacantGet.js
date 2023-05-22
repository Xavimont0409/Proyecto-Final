const { Vacant, Workday, WorkMethod, Seniority, Applicant } = require("../../db");
const { Op } = require('sequelize')

const getAllVacant = () => {
  return Vacant.findAll({
    attributes:["id","title", "description","createdAt","CompanyId"],
    include: [{model:Applicant},
      {
        model: Workday,
        attributes: ["name"],
      },
      {
        model: WorkMethod,
        attributes: ["name"]
      },
      {
        model: Seniority,
        attributes: ["name"]
      }
    ],
  });
};  

const getVacantByName = async (name) => {
  const nameUpper = name.toUpperCase()
  const findVacant = await Vacant.findAll({
    where: { title: {[Op.iLike]: `%${nameUpper}%` } },
    attributes:["id","title", "description","createdAt","CompanyId"],
    include: [{model:Applicant},
      {
        model: Workday,
        attributes: ["name"],
      },
      {
        model: WorkMethod,
        attributes: ["name"]
      },
      {
        model: Seniority,
        attributes: ["name"]
      }
    ],
  });
  return findVacant;
}

module.exports = {
  getAllVacant,
  getVacantByName,
};

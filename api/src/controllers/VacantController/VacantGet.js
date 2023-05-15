const { Vacant, Workday, WorkMethod, Seniority } = require("../../db");
const { Op } = require('sequelize')

const getAllVacant = () => {
  return Vacant.findAll({
    include: [
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
    include: [
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

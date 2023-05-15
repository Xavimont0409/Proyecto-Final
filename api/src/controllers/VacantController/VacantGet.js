const { Vacant, Workday, WorkMethod, Seniority } = require("../../db");
const { Op } = require('sequelize')

const getAllVacant = () => {
  return Vacant.findAll({
    attributes: ["id", "title", "description", "createdAt"],
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
  console.log(name);
  //{[Op.iLike]: `%${title}%` }
  const findVacant = await Vacant.findAll({
    where: { title: {[Op.iLike]: `%${name}%` } },
    attributes: ["id", "title", "description", "createdAt"],
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

const { Vacant, Workday, WorkMethod, Seniority } = require("../../db");

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

const getVacantByName = async (title) => {
  const vacant = await Vacant.findAll({
  where: { name: {[Op.iLike]: `%${title}%` }},
  include: {
    model: Workday, 
    attibutes : ['name'],
    through: {
      attibutes: [],
    },
  }});
  return vacant;
}

module.exports = {
  getAllVacant,
  getVacantByName,
};

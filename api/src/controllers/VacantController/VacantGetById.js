const { Vacant, Workday } = require("../../db");

const getVacantId = async (id) => {
  const findVacant = await Vacant.findAll({
    where: {id},
    attributes:["id","title", "description"],
    include: {
      model:Workday,
      attributes: ["name"]
    }
  })

  return findVacant;
};

module.exports = {
  getVacantId,
};

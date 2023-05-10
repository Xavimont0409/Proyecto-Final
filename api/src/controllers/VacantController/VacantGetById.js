const { Vacant, Journey } = require("../../db");

const getVacantId = async (id) => {
  const findVacant = await Vacant.findAll({where: { id }});

  return findVacant;
};

module.exports = {
  getVacantId,
};

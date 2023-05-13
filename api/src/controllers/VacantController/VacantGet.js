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

module.exports = {
  getAllVacant,
};

const { Vacant, Workday, WorkMethod, Seniority, Applicant } = require("../../db");

const getVacantId = async (id) => {
  const findVacant = await Vacant.findByPk(id,{
    include: [{model: Applicant},
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
};

module.exports = {
  getVacantId,
};

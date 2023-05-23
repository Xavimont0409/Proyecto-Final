const { Applicant, Cv, Vacant } = require("../../db");

const vacantDelete = async (id, body) => {
  let response = {};
  await Vacant.update({status: false}, {
    where: { id: id },
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
  }).then(num => {
    if (num == 1) response = body;
  });
  return response;
}

module.exports = vacantDelete;
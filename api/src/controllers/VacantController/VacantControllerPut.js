const { Vacant, Workday, WorkMethod, Seniority, Applicant } = require("../../db");


const vacantUpdate = async (id, body) => {
    let response = {};
    await Vacant.update(body, {
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
        where: {id: id}
      }).then(num => {
        if (num == 1) response = body;
    });
    return response;
}



module.exports = vacantUpdate;
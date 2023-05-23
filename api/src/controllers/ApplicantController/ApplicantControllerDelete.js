const { Applicant, Cv, Vacant } = require("../../db");

const applicantDelete = async (id, body) => {
    let response = {};
    await Applicant.update({registed: false}, {
        include: [{ model: Cv }, { model: Vacant }],
        where: { id: id }
    }).then(num => {
        if (num == 1) response = body;
    });
    return response;
}

module.exports = applicantDelete;
const { Applicant, Cv, Vacant } = require("../../db");

const applicantUpdate = async (id, body) => {
    let response = {};
    await Applicant.update(body, {
        include: [{ model: Cv }, { model: Vacant }],
        where: { id: id }
    }).then(num => {
        if (num == 1) response = body;
    });
    return response;
}

module.exports = applicantUpdate;
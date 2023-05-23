const {
    Company,
    Vacant,
    Workday,
    WorkMethod,
    Seniority,
    Star
} = require("../../db");

const companyDelete = async (id, body) => {
    let response = {};
    await Company.update({ registed: false }, {
        include: [
            {
                model: Vacant,
                attributes: ["title", "description"],
                include: [
                    {
                        model: Workday,
                        attributes: ["name"],
                    },
                    {
                        model: WorkMethod,
                        attributes: ["name"],
                    },
                    {
                        model: Seniority,
                        attributes: ["name"],
                    },
                ],
            },
            {
                model: Star,
                attributes: ["stars", "text"]
            }
        ],
        where: { id: id }
    }).then(num => {
        if (num == 1) response = body;
    });
    return response;
}

module.exports = companyDelete;
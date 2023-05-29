const { Experience, Cv } = require("../../db");

const deleteExperience = async (body) => {
    let response = {};
    const {id} = body;
    await Experience.update({registed: false},{
        where: {id: id},
        include: {model: Cv}
    }).then(async (num) => {
        if(num == 1) {
            response = body;
        }
    });

    return response;
}

module.exports = {
    deleteExperience
}
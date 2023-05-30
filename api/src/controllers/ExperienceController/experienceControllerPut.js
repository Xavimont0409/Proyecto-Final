const { Experience, Cv } = require("../../db");

const updateExperience = async (body) => {
    let response = {};
    const {id, ...ExperienceData} = body;
    await Experience.update(ExperienceData,{
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
    updateExperience
}
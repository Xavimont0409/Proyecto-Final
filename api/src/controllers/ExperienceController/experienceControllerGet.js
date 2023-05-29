const { Experience, Cv } = require("../../db");

const getAllExperience = async () => {
    return await Experience.findAll({
        include: {model: Cv}
    });
}

const getExperienceById = async (id) => {
    return await Experience.findByPk(id,{include: {model: Cv}});
}
module.exports = {
    getAllExperience,
    getExperienceById
}
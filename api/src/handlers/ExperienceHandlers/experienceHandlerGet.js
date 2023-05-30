const { getAllExperience, getExperienceById } = require('../../controllers/ExperienceController/experienceControllerGet');
const errorUser = require('../../helpers/errors');

const experienceHandlerGet = async (req,res) =>{
    try {
        res.status(200).json(await getAllExperience());
    } catch (error) {
        errorUser(error,res);
    }
}

const experienceHandlerGetId = async(req,res) =>{
    try {
        const {id} = req.params;
        res.status(200).json(await getExperienceById(id))
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    experienceHandlerGet,
    experienceHandlerGetId
}
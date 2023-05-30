const { updateExperience } = require('../../controllers/ExperienceController/experienceControllerPut');
const errorUser = require('../../helpers/errors');

const experienceHandlerPut = async (req,res) => {
    try {
        const body = req.body;
        res.status(200).json(await updateExperience(body));
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    experienceHandlerPut
}
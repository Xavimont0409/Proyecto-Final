const { deleteExperience } = require('../../controllers/ExperienceController/experienceControllerDelete');
const errorUser = require('../../helpers/errors');

const experienceHandlerDelete = async (req,res) => {
    const body = req.body;
    try {
        res.status(200).json(await deleteExperience(body));
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    experienceHandlerDelete
}
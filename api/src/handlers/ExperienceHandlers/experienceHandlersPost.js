const errorUser = require("../../helpers/errors");
const { createExperience } = require('../../controllers/ExperienceController/experienceControllerPost');

const experienceHandlersPost = async(req, res) =>{
    const { company, charge, experience_level, location, start_date, end_date, still_working, CvId } = req.body;
    try {
        res.status(200).json(await createExperience(company, charge, experience_level, location, start_date, end_date, still_working, CvId));
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports={
    experienceHandlersPost
}
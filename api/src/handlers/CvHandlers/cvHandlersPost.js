const errorUser = require('../../helpers/errors')
const { createCv } = require('../../controllers/CvController/CvControllerPost')

const cvHandlerPost = async(req, res) =>{
    const { dni, name, lastName, address, photo, profesion, github, linkedin, work_experience, personal_description, education } = req.body
    try {
        res.status(200).json(await createCv(dni, name, lastName, address, photo, profesion, github, linkedin, work_experience, personal_description, education))
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports={
    cvHandlerPost,
}
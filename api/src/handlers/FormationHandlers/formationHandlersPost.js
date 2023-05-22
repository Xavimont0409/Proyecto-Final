const errorUser = require("../../helpers/errors");
const { createFormation } = require('../../controllers/FormationController/formationControllerPost')

const formationHandlerPost = async(req, res) => {
  const { title, country, study_level, study_area, institute, state, start_date, end_date, CvId } = req.body
  try {
    res.status(200).json(await createFormation(title, country, study_level, study_area, institute, state, start_date, end_date, CvId))
  } catch (error) {
    errorUser(error, res)
  }
};

module.exports = {
  formationHandlerPost,
}
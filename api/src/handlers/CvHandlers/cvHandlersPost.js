const errorUser = require("../../helpers/errors");
const { createCv } = require("../../controllers/CvController/CvControllerPost");

const cvHandlerPost = async (req, res) => {
  const {
    dni,
    phone,
    address,
    photo,
    profession,
    linkedin,
    personal_description,
    skill,
    country,
    educational_institution,
    state,
    initial_date,
    finish_date,
    ApplicantId,
  } = req.body;
  try {
    res
      .status(200)
      .json(
        await createCv(
          dni,
          phone,
          address,
          photo,
          profession,
          linkedin,
          personal_description,
          skill,
          country,
          educational_institution,
          state,
          initial_date,
          finish_date,
          ApplicantId
        )
      );
  } catch (error) {
    errorUser(error, res);
  }
};

module.exports = {
  cvHandlerPost,
};

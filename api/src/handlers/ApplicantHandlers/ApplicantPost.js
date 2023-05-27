const errorUser = require("../../helpers/errors");
const { postApplicant } = require('../../controllers/ApplicantController/ApplicantControllerPost');

const applicantHandlersPost = async (req, res) => {
  const { name, lastName, email, cellphone, registed, password } = req.body;
  try {
    res
      .status(200)
      .json(await postApplicant(name, lastName, email, cellphone, registed, password));
  } catch (error) {
    errorUser(error, res);
  }
};

module.exports = {
  applicantHandlersPost,
};

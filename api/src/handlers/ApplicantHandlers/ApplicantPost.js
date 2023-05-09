const errorUser = require("../../helpers/errors");

const applicantHandlersPost = async (req, res) => {
  const { name, lastName, email, password, cellphone } = req.body;
  try {
    res
      .status(200)
      .json(await postApplicant(name, lastName, email, password, cellphone));
  } catch (error) {
    errorUser(error, res);
  }
};

module.exports = {
  applicantHandlersPost,
};

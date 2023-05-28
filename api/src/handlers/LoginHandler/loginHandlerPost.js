const errorUser = require("../../helpers/errors");
const { getUserApplicant, getUserComany } = require('../../controllers/LoginController/loginControllerPost')

const loginApplicantHandlerPost = async(req, res) => {
  const { email, password } = req.body;
  try {
    res.status(200).json( await getUserApplicant(email, password))
  } catch (error) {
    errorUser(error, res)
  }
};
const loginCompanyHandlerPost = async(req, res) =>{
  const { email, password } = req.body;
  try {
    res.status(200).json( await getUserComany(email, password))
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports ={
  loginApplicantHandlerPost,
  loginCompanyHandlerPost
}
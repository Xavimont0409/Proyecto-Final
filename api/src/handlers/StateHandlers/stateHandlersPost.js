const errorUser = require("../../helpers/errors");
const { createdState } = require('../../controllers/StateController/stateControlerPost')

const stateHandlerPost = async(req, res) => {
  const { registed, name, ApplicantId, CompanyId } = req.body
  try {
    res.status(200).json(await createdState(registed, name, ApplicantId, CompanyId))
  } catch (error) {
    errorUser(error, res)
  }
};

module.exports={
  stateHandlerPost
}
const errorUser = require("../../helpers/errors");
const { getEmail } = require('../../controllers/getEmailController/getEmailController')

const getEmailHandler = async(req, res) =>{
  const { email } = req.query
  try {
    res.status(200).json(await getEmail(email))
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports = {
  getEmailHandler
}
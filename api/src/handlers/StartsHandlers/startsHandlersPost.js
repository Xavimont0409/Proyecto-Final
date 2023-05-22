const errorUser = require('../../helpers/errors')
const { postStars } = require('../../controllers/StarsController/starsControllerPost')

const starsHandlerPost = async(req, res)=>{
  const { stars, CompanyId, text } = req.body
  try {
    res.status(200).json(await postStars(stars, CompanyId, text))
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports = {
  starsHandlerPost
}
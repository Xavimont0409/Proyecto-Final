const { Router } = require('express')
const { cvHandlerPost } = require('../handlers/CvHandlers/cvHandlersPost')

const cvRouter = Router()

cvRouter.post('/', cvHandlerPost)

module.exports= cvRouter
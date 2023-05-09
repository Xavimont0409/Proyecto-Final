const { Router } = require('express')
const companysHandlerGet = require('../handlers/companysHandlers/companysGet')
const companysHandlerPost = require('../handlers/companysHandlers/companysPost')

const companysRouter = Router();

companysRouter.get('/', companysHandlerGet)
companysRouter.post('/', companysHandlerPost)

module.exports = companysRouter;
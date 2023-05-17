const { Router } = require('express');
const { starsHandlerPost } = require('../handlers/StartsHandlers/startsHandlersPost')

const starsRouter = Router();

starsRouter.post('/', starsHandlerPost)

module.exports = starsRouter
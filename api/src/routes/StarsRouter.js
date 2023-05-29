const { Router } = require('express');
const { starsHandlerPost } = require('../handlers/StartsHandlers/startsHandlersPost');
const { starsHandlerGet } = require('../handlers/StartsHandlers/startsHandlersGet');

const starsRouter = Router();

starsRouter.post('/', starsHandlerPost);
starsRouter.get("/", starsHandlerGet);

module.exports = starsRouter
const { Router } = require('express');
const { stateHandlerPost } = require('../handlers/StateHandlers/stateHandlersPost')

const stateRouter = Router();

stateRouter.post("/", stateHandlerPost)

module.exports = stateRouter
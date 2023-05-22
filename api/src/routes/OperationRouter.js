const { Router } = require('express');
const { operationHandlerGet }= require('../handlers/OperationHandlers/OperationHandlerGet');
const { operationHandlerPost } = require('../handlers/OperationHandlers/OperationHandlerPost');

const operationRouter = Router();

operationRouter.get('/', operationHandlerGet);
operationRouter.post('/', operationHandlerPost);

module.exports= operationRouter;
const { Router } = require('express');
const { cvHandlerPost } = require('../handlers/CvHandlers/cvHandlersPost');
const { cvHandlerGet, cvHandlerGetId } = require('../handlers/CvHandlers/cvHandlerGet');
const { cvPutHandler } = require('../handlers/CvHandlers/cvHandlersPut');
const { cvHandlerDelete } = require('../handlers/CvHandlers/cvHandlerDelete');


const cvRouter = Router();

cvRouter.get('/', cvHandlerGet);
cvRouter.get('/:id', cvHandlerGetId);
cvRouter.post('/', cvHandlerPost);
cvRouter.put('/:id', cvPutHandler);
cvRouter.delete('/:id', cvHandlerDelete)


module.exports= cvRouter
const { Router } = require('express');
const { cvHandlerPost } = require('../handlers/CvHandlers/cvHandlersPost');
const { cvHandlerGet, cvHandlerGetId } = require('../handlers/CvHandlers/cvHandlerGet');


const cvRouter = Router();

cvRouter.get('/', cvHandlerGet);
cvRouter.get('/:id', cvHandlerGetId);
cvRouter.post('/', cvHandlerPost);


module.exports= cvRouter
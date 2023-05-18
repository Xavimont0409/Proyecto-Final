const { Router } = require('express');
const { vacantHandlerGetId, vacantHandlerGet } = require('../handlers/VacantHandlers/vacantGet');
const { vacantHandlerPost, vacantHandlerPostRelation } = require('../handlers/VacantHandlers/vacantPost');

const vacantRouter = Router();

vacantRouter.get('/', vacantHandlerGet);
vacantRouter.get('/:id', vacantHandlerGetId);
vacantRouter.post('/', vacantHandlerPost);
vacantRouter.post('/relation', vacantHandlerPostRelation)


module.exports = vacantRouter;

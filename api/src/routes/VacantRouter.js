const { Router } = require('express');
const { vacantHandlerGetId, vacantHandlerGet } = require('../handlers/VacantHandlers/vacantGet');
const { vacantHandlerPost, vacantHandlerPostRelation } = require('../handlers/VacantHandlers/vacantPost');
const { vacantHandlerPut } = require('../handlers/VacantHandlers/vacantPut');
const { vacantHandlerDelete } = require('../handlers/VacantHandlers/vacantDelete');

const vacantRouter = Router();

vacantRouter.get('/', vacantHandlerGet);
vacantRouter.get('/:id', vacantHandlerGetId);
vacantRouter.post('/', vacantHandlerPost);
vacantRouter.post('/relation', vacantHandlerPostRelation);
vacantRouter.put('/:id', vacantHandlerPut);
vacantRouter.delete('/:id', vacantHandlerDelete);


module.exports = vacantRouter;

const { Router } = require('express')
const { vacantHandlerGetId, vacantHandlerGet } = require('../handlers/VacantHandlers/vacantGet')
const { vacantHandlerPost } = require('../handlers/VacantHandlers/vacantPost')
const vacantRouter = Router()

vacantRouter.get('/', vacantHandlerGet)//!Todos los empleos y empleo por body input
vacantRouter.get('/:id', vacantHandlerGetId)
vacantRouter.post('/', vacantHandlerPost)


module.exports = vacantRouter;

const { Router } = require('express')
const { vacantHandlerGetId, vacantHandlerGet } = require('../handlers/VacantHandlers/vacantGet')

const vacantRouter = Router()

vacantRouter.get('/', vacantHandlerGet)//!Todos los empleos y empleo por body input
vacantRouter.get('/:id', vacantHandlerGetId)


module.exports = vacantRouter;

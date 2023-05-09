const { Router } = require('express')
const { vacantHandlerGetId, vacantHandlerGet } = require('../handlers/VacantHandlers/vacantGet')

const vacantRouter = Router()

jobsRouter.get('/', vacantHandlerGet)//!Todos los empleos y empleo por body input
jobsRouter.get('/:id', vacantHandlerGetId)


module.exports = vacantRouter;

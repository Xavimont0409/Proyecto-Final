const { Router } = require('express')

const vacantRouter = Router()

jobsRouter.get('/')//!Todos los empleos y empleo por body input
jobsRouter.get('/:id')


module.exports = vacantRouter;

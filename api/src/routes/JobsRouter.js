const { Router } = require('express')

const jobsRouter = Router()

jobsRouter.get('/')//!Todos los empleos y empleo por body input
jobsRouter.get('/:id')


module.exports = jobsRouter;

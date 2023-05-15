const { Router } = require('express');
const { applicantHandlerGet, applicantHandlerGetId } = require('../handlers/ApplicantHandlers/ApplicantGet');
const { applicantHandlersPost }= require('../handlers/ApplicantHandlers/ApplicantPost');

const applicantRouter = Router();

applicantRouter.get('/:id', applicantHandlerGetId);
applicantRouter.get('/', applicantHandlerGet);
applicantRouter.post('/', applicantHandlersPost);

module.exports = applicantRouter;
const { Router } = require('express');
const { applicantHandlerGet, applicantHandlerGetId } = require('../handlers/ApplicantHandlers/ApplicantGet');
const { applicantHandlersPost }= require('../handlers/ApplicantHandlers/ApplicantPost');
const { applicantHandlerPut } = require('../handlers/ApplicantHandlers/ApplicantPut');
const { applicantHandlerDelete } = require('../handlers/ApplicantHandlers/ApplicantDelete');

const applicantRouter = Router();

applicantRouter.get('/:id', applicantHandlerGetId);
applicantRouter.get('/', applicantHandlerGet);
applicantRouter.post('/', applicantHandlersPost);
applicantRouter.put('/:id', applicantHandlerPut);
applicantRouter.delete('/:id', applicantHandlerDelete);

module.exports = applicantRouter;
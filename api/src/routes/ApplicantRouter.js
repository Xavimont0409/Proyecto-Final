const { Router } = require('express')
const applicantHandlerGet = require('../handlers/ApplicantHandlers/ApplicantGet')
const applicantHandlersPost = require('../handlers/ApplicantHandlers/ApplicantPost')

const applicantRouter = Router();

applicantRouter.get('/', applicantHandlerGet)
applicantRouter.post('/', applicantHandlersPost)

module.exports = applicantRouter
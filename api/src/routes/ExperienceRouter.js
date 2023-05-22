const { Router } = require('express');
const { experienceHandlersPost } = require('../handlers/ExperienceHandlers/experienceHandlersPost');

const experienceRouter = Router();

experienceRouter.post('/', experienceHandlersPost);

module.exports = experienceRouter;
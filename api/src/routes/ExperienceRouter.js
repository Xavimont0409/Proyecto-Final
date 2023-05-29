const { Router } = require('express');
const { experienceHandlersPost } = require('../handlers/ExperienceHandlers/experienceHandlersPost');
const { experienceHandlerGet, experienceHandlerGetId } = require('../handlers/ExperienceHandlers/experienceHandlerGet');
const { experienceHandlerPut } = require('../handlers/ExperienceHandlers/experienceHandlerPut');
const { experienceHandlerDelete } = require('../handlers/ExperienceHandlers/experienceHandlerDelete');

const experienceRouter = Router();

experienceRouter.post('/', experienceHandlersPost);
experienceRouter.get('/', experienceHandlerGet);
experienceRouter.get('/:id', experienceHandlerGetId);
experienceRouter.put('/:id', experienceHandlerPut);
experienceRouter.delete('/:id', experienceHandlerDelete);

module.exports = experienceRouter;
const { Router } = require("express");
const { companysHandlerGet } = require('../handlers/companysHandlers/companyGet')
const { companysHandlerPost } = require('../handlers/companysHandlers/companyPost')
 
const companysRouter = Router();

companysRouter.get("/", companysHandlerGet);
companysRouter.post("/", companysHandlerPost);

module.exports = companysRouter;

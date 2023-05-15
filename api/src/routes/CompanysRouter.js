const { Router } = require("express");
const { companysHandlerGet, companysHandlerGetId } = require('../handlers/companysHandlers/companyGet');
const { companysHandlerPost } = require('../handlers/companysHandlers/companyPost');
 
const companysRouter = Router();

companysRouter.get("/", companysHandlerGet);
companysRouter.get("/:id", companysHandlerGetId);
companysRouter.post("/", companysHandlerPost);

module.exports = companysRouter;

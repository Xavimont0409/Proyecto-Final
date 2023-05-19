const { Router } = require("express");
const { companysHandlerGet, companysHandlerGetId } = require('../handlers/companysHandlers/companyGet');
const { companysHandlerPost } = require('../handlers/companysHandlers/companyPost');
const { companyPutHandler } = require('../handlers/companysHandlers/companyPut')

const companysRouter = Router();

companysRouter.get("/", companysHandlerGet);
companysRouter.get("/:id", companysHandlerGetId);
companysRouter.post("/", companysHandlerPost);
companysRouter.put("/updateCompany", companyPutHandler)

module.exports = companysRouter;

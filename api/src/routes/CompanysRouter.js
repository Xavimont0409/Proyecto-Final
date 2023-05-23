const { Router } = require("express");
const { companysHandlerGet, companysHandlerGetId } = require('../handlers/companysHandlers/companyGet');
const { companysHandlerPost } = require('../handlers/companysHandlers/companyPost');
const { companyPutHandler } = require('../handlers/companysHandlers/companyPut');
const { companyHandlerDelete } = require("../handlers/companysHandlers/companyDelete");

const companysRouter = Router();

companysRouter.get("/", companysHandlerGet);
companysRouter.get("/:id", companysHandlerGetId);
companysRouter.post("/", companysHandlerPost);
companysRouter.put("/:id", companyPutHandler);
companysRouter.put('/updateCompany', companyPutHandler);
companysRouter.delete("/:id", companyHandlerDelete);

module.exports = companysRouter;

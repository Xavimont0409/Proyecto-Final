const { Router } = require("express")
const { formationHandlerPost } = require("../handlers/FormationHandlers/formationHandlersPost")

const formationRouter = Router()

formationRouter.post("/", formationHandlerPost)

module.exports = formationRouter
const { Router } = require('express')
const companysRouter = require('./CompanysRouter')
const jobsRouter = require('./JobsRouter')
const usersRouter = require('./UsersRouter')

const router = Router();

router.use("/users", usersRouter)
router.use("/jobs", jobsRouter)
router.use("/companys", companysRouter)
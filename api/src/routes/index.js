const { Router } = require('express')
const companysRouter = require('./CompanysRouter')
const vacantRouter = require('./VacantRouter')
const applicantRouter = require('./ApplicantRouter')

const router = Router();

router.use("/applicant", applicantRouter)
router.use("/job", vacantRouter)
router.use("/company", companysRouter)
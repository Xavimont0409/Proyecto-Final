const { Router } = require('express')
const companysRouter = require('./CompanysRouter')
const vacantRouter = require('./VacantRouter')
const applicantRouter = require('./ApplicantRouter')
const cvRouter = require('./CvRouter')
const operationRouter = require('./OperationRouter')
const experienceRouter = require('./ExperienceRouter')

const router = Router();

router.use("/applicant", applicantRouter)
router.use("/job", vacantRouter)
router.use("/company", companysRouter)
router.use("/createCv", cvRouter)
router.use("/operation", operationRouter)
router.use("/experience", experienceRouter)

module.exports = router;
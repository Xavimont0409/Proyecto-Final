const { Router } = require('express');
const companysRouter = require('./CompanysRouter');
const vacantRouter = require('./VacantRouter');
const applicantRouter = require('./ApplicantRouter');
const cvRouter = require('./CvRouter');
const operationRouter = require('./OperationRouter');
const experienceRouter = require('./ExperienceRouter');
<<<<<<<<< Temporary merge branch 1
const getEmailRouter = require('./getEmailRouter')
=========
const stateRouter = require('./stateRouter')
const productRouter = require('./productRouter')
>>>>>>>>> Temporary merge branch 2

const router = Router();

router.use("/applicant", applicantRouter);
router.use("/job", vacantRouter);
router.use("/company", companysRouter);
router.use("/createCv", cvRouter);
router.use("/operation", operationRouter);
router.use("/experience", experienceRouter);
<<<<<<<<< Temporary merge branch 1
router.use("/email", getEmailRouter)
=========
router.use("/state", stateRouter);
router.use("/product", productRouter);
>>>>>>>>> Temporary merge branch 2

module.exports = router;
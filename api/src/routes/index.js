const { Router } = require('express');
const companysRouter = require('./CompanysRouter');
const vacantRouter = require('./VacantRouter');
const applicantRouter = require('./ApplicantRouter');
const cvRouter = require('./CvRouter');
const operationRouter = require('./OperationRouter');
const experienceRouter = require('./ExperienceRouter');
const getEmailRouter = require('./getEmailRouter')
const stateRouter = require('./stateRouter')
const productRouter = require('./productRouter')


const router = Router();

router.use("/applicant", applicantRouter);
router.use("/job", vacantRouter);
router.use("/company", companysRouter);
router.use("/createCv", cvRouter);
router.use("/operation", operationRouter);
router.use("/experience", experienceRouter);
router.use("/email", getEmailRouter)
router.use("/state", stateRouter);
router.use("/product", productRouter);

module.exports = router;
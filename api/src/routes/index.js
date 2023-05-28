const { Router } = require('express');
const companysRouter = require('./CompanysRouter');
const vacantRouter = require('./VacantRouter');
const applicantRouter = require('./ApplicantRouter');
const cvRouter = require('./CvRouter');
const operationRouter = require('./OperationRouter');
const experienceRouter = require('./ExperienceRouter');
const getEmailRouter = require('./getEmailRouter');
const productRouter = require('./productRouter');
const starsRouter = require('./StarsRouter');
const routerPayMethod = require('./payMethodRouter');
const formationRouter = require('./FormationRouter')
const loginRouter = require('./LoginRouter')


const router = Router();

router.use("/applicant", applicantRouter);
router.use("/job", vacantRouter);
router.use("/company", companysRouter);
router.use("/createCv", cvRouter);
router.use("/operation", operationRouter);
router.use("/experience", experienceRouter);
router.use("/email", getEmailRouter)
router.use("/product", productRouter);
router.use("/stars", starsRouter);
router.use("/payMethod", routerPayMethod);
router.use("/formation", formationRouter)
router.use("/login", loginRouter)

module.exports = router;
const { Router } = require ('express')
const { loginApplicantHandlerPost, loginCompanyHandlerPost } = require('../handlers/LoginHandler/loginHandlerPost')

const loginRouter = Router()

loginRouter.post('/applicant', loginApplicantHandlerPost)
loginRouter.post('/company', loginCompanyHandlerPost)

module.exports= loginRouter
const { Router } = require('express')
const { getEmailHandler } = require('../handlers/GetEmailHandlers/getEmailHandlersGet')

const getEmailRouter = Router()

getEmailRouter.get('/', getEmailHandler)


module.exports = getEmailRouter
const { Router } = require('express')
const { payMethodHandllerGet } = require('../handlers/PayMethodHandlers/PayMethodGet')

const routerPayMethod = Router();

routerPayMethod.get('/', payMethodHandllerGet);


module.exports = routerPayMethod;
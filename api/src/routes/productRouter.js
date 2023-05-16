const { Router } = require('express');
const { productHandlerGet } = require('../handlers/productHandler/productHandlerGet')

const productsRouter = Router();

productsRouter.get('/:id', productHandlerGet);

module.exports = productsRouter
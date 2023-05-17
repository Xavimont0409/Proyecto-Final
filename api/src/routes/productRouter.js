const { Router } = require('express');
const { productHandlerGet } = require('../handlers/productHandler/productHandlerGet');
const { productHandlerPost } = require('../handlers/productHandler/productHandlerPost');s

const productsRouter = Router();

productsRouter.get('/:id', productHandlerGet);
productsRouter.post('/', productHandlerPost);

module.exports = productsRouter
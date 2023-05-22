const { Router } = require('express');
const { productHandlerGet } = require('../handlers/productHandler/productHandlerGet');
const { productHandlerPost } = require('../handlers/productHandler/productHandlerPost');
const { validateProduct } = require('../middleware/ProductValidate/ProductValidate');

const productRouter = Router();

productRouter.get('/:id', productHandlerGet);
productRouter.post('/', validateProduct,productHandlerPost);

module.exports = productRouter
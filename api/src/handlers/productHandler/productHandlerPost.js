const errorUser = require('../../helpers/errors');
const { postProduct } = require('../../controllers/ProductController/ProductControllerPost')

const productHandlerPost = async (req, res) => {
    const {name, details, price} = req.body;
try {
    res.status(200).json(await postProduct(name, details, price))
} catch (error) {
    errorUser(error, res);
}
}

module.exports =  {productHandlerPost }
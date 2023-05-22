const errorUser = require('../../helpers/errors');
const { productById } = require('../../controllers/ProductController/ProductByIdController')

const productHandlerGet = async (req, res) =>{
    const { id } = req.params;
    try {
        const response = await productById(id);
        res.status(200).json(response)
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = { productHandlerGet } 
const errorUser = require("../../helpers/errors");
const { getPayMethods } = require('../../controllers/PaymentMethodsController/PaymentMethodsControllerGet')


const payMethodHandllerGet = async (req, res) => {
    try {
        const response = await getPayMethods();
        res.status(200).json(response)
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = { payMethodHandllerGet }
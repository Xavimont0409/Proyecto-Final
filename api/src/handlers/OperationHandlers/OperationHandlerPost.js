const errorUser = require('../../helpers/errors');
const mercadopago = require ('../../utils/mercadopago')

const operationHandlerPost = async(req, res) =>{
    const { id } = req.params;
    const { idUser, cost, PayMethodId, detail } = req.body;
    try {
        const response = await createOperation(id, idUser, cost, PayMethodId, detail)

        const preferenceId = mercadopago.preferences.create({
            items: [
                {
                    title: response.detail,
                    unit_price: response.cost,
                    quantity: 1,
                }
            ]
        }).then((preference) => {
            return {preferenceId: preference.id}
        });

        res.status(200).json({response, preferenceId});
    } catch (error) {
        errorUser(error,res);
    }
}

module.exports={
    operationHandlerPost
}
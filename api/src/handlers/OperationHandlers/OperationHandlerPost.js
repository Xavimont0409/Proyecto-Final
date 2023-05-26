const errorUser = require('../../helpers/errors');
const mercadopago = require ('../../utils/mercadopago');
const { createOperation } = require('../../controllers/OperationController/OperationControllerPost');
const {middlewareEmail} = require('../../middleware/MiddlewareEmail/MiddlewareEmail')

const operationHandlerPost = async (req, res) =>{
   
    const {cost, detail, details, CompanyId, PayMethodId, ApplicantId, name, email, PayMethod} = req.body;
    try {
        const response = await createOperation(cost, detail, CompanyId, PayMethodId, ApplicantId);
        const preferenceId = await mercadopago.preferences.create({
            items: [
                {
                    title: response.detail,
                    unit_price: parseInt(response.cost),
                    quantity: 1,
                }
            ],
            "back_urls": {
                "success": "http://localhost:3000/success",
                "failure": "http://www.failure.com",
                "pending": "http://www.pending.com"
            },
            "auto_return": "approved",
        })
        
        res.status(200).json({response, preferenceId});
            
    
     middlewareEmail(email, name, detail, details, cost, PayMethodId, PayMethod)
        
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports={
    operationHandlerPost
}
const errorUser = require('../../helpers/errors');


const operationHandlerGet = async(req, res) =>{
    try {
        res.status(200).json(await getOperation());
    } catch (error) {
        errorUser(error,res);
    }
}


module.exports={
    operationHandlerGet
}
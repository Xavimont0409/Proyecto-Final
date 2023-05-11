const errorUser = require('../../helpers/errors')


const operationHandlerPost = async(req, res) =>{
    const { id } = req.params
    const { cost, PayMethodId } = req.body
    try {
        res.status(200).json(await createOperation(id, cost, PayMethodId))
    } catch (error) {
        errorUser(error,res)
    }
}

module.exports={
    operationHandlerPost
}
const errorUser = require('../../helpers/errors')

const vacantHandlerGetId = (req, res) =>{
    const { id } = req.params;
    try {
        
    } catch (error) {
        errorUser(error, res);
        
    }
}

const vacantHandlerGet = (req, res) =>{
    try {
        
    } catch (error) {
        errorUser(error, res)
    }
}

module.exports={
    vacantHandlerGetId,
    vacantHandlerGet
}
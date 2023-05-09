const errorUser = require('../../helpers/errors')

const companysHandlerGet = (req, res) =>{
    try {
        
    } catch (error) {
        errorUser(error, res);
        
    }
}

module.export={
    companysHandlerGet
}
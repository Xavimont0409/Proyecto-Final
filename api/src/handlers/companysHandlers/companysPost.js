const errorUser = require('../../helpers/errors')

const companysHandlerPost = (req, res) =>{
    try {
        
    } catch (error) {
        errorUser(error, res);
        
    }
}

module.export={
    companysHandlerPost
}
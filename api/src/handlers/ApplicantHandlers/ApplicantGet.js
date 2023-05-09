const errorUser = require('../../helpers/errors')

const applicantHandlerGet = (req, res) =>{
    try {
        
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    applicantHandlerGet,
}
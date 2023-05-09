const errorUser = require('../../helpers/errors')

const applicantHandlersPost = (req, res) =>{
    try {
        
    } catch (error) {
        errorUser(error, res);
    }
}

module.exports = {
    applicantHandlersPost
}
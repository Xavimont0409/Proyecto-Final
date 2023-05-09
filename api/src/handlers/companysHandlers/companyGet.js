const errorUser = require('../../helpers/errors')
const { getAllCompany } = require('../../controllers/CompaniesController/CompanyControllerGet')
async function companysHandlerGet(req, res){
    try {
        res.status(200).json(await getAllCompany())
    } catch (error) {
        errorUser(error, res);
        
    }
}

module.exports={
    companysHandlerGet
}
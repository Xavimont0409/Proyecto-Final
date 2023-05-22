const errorUser = require('../../helpers/errors');
const { getAllCompany, getCompanyId } = require('../../controllers/CompaniesController/CompanyControllerGet');


async function companysHandlerGet(req, res){
    try {
        res.status(200).json(await getAllCompany());
    } catch (error) {
        errorUser(error, res);
        
    }
}


const companysHandlerGetId = async(req, res) =>{
    const { id } = req.params
    try {
        res.status(200).json(await getCompanyId(id));
    } catch (error) {
        errorUser(error, res);
    }
}
module.exports={
    companysHandlerGet,
    companysHandlerGetId
}
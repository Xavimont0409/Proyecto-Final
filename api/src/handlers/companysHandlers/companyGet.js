const errorUser = require('../../helpers/errors');
const { getAllCompany, getCompanyId } = require('../../controllers/CompaniesController/CompanyControllerGet');
const setXTotalCount = require('../../controllers/utils/setXTotalCount');
const filterData = require('../../controllers/utils/filterData');
const sortNorder = require('../../controllers/utils/sort&Order');

async function companysHandlerGet(req, res){

    const { _sort, _order, name } = req.query;

    try {
        const response = await getAllCompany();
        let finalResult = response;
        if(name){
            finalResult = filterData(name, finalResult); //aca se filtran los datos(si es que hay un valor de filtrado)
        }
        //si no habia un valor por el cual filtrar los resultados simplemente se ordenan los datos recibidos y se envian como respuestaFinal
        sortNorder(_sort, _order, finalResult); //aca se ordenan en relacion a que dato quieren ser ordenados
        setXTotalCount(res, finalResult.length); //aca se asigna un header X-Total-Count requerido por las tablas de react-admin
        res.status(200).json(finalResult);
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
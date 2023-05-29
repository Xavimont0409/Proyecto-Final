const { getStars } = require('../../controllers/StarsController/starsControllerGet');
const filterData = require('../../controllers/utils/filterData');
const setXTotalCount = require('../../controllers/utils/setXTotalCount');
const sortNorder = require('../../controllers/utils/sort&Order');
const errorUser = require('../../helpers/errors');


const starsHandlerGet = async(req, res)=>{

  const { _sort, _order, id } = req.query;
  try {
    const response = await getStars();
    let finalResult = response;
    if(id){
      finalResult = filterData(id, finalResult);
    }
    sortNorder(_sort, _order, finalResult);
    setXTotalCount(res, finalResult.length);
    res.status(200).json(finalResult);
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports = {
  starsHandlerGet
}
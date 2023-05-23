const errorUser = require("../../helpers/errors");
const {
  getVacantId,
} = require("../../controllers/VacantController/VacantGetById");
const {
  getAllVacant,
  getVacantByName
} = require("../../controllers/VacantController/VacantGet");
const filterData = require("../../controllers/utils/filterData");
const sortNorder = require("../../controllers/utils/sort&Order");
const setXTotalCount = require("../../controllers/utils/setXTotalCount");

const vacantHandlerGetId = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await getVacantId(id));
  } catch (error) {
    errorUser(error, res);
  }
};

const vacantHandlerGet = async (req, res) => {
  const { _sort, _order, title, name } = req.query;
  try {
    const results = name ? await getVacantByName(name) : await getAllVacant();
    let finalResult = results;
    if(title){
      finalResult = filterData(title, finalResult);
    }
    sortNorder(_sort,_order, finalResult);
    setXTotalCount(res,finalResult.length);
    res.status(200).json(finalResult);
  } catch (error) {
    errorUser(error, res);
  }
};


module.exports = {
  vacantHandlerGetId,
  vacantHandlerGet,
};

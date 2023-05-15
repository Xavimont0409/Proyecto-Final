const errorUser = require("../../helpers/errors");
const {
  getVacantId,
} = require("../../controllers/VacantController/VacantGetById");
const {
  getAllVacant,
  getVacantByName
} = require("../../controllers/VacantController/VacantGet");

const vacantHandlerGetId = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await getVacantId(id));
  } catch (error) {
    errorUser(error, res);
  }
};

const vacantHandlerGet = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await getVacantByName(name) : await getAllVacant();
    res.status(200).json(results);
  } catch (error) {
    errorUser(error, res);
  }
};


module.exports = {
  vacantHandlerGetId,
  vacantHandlerGet,
};

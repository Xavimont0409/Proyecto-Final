const { Cv, Experience, Formation } = require("../../db");

const getIdCv = async (id) => {
  const findCv = await Cv.findAll({
    where: { id },
    include: [
      {
        model: Experience,
      },
      {
        model: Formation
      }
    ],
  });

  return findCv;
};

module.exports = {
  getIdCv,
};

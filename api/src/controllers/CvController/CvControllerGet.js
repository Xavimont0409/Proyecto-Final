const { Cv, Experience, Formation } = require("../../db");

const getAllCv = () => {
  return Cv.findAll({
    include: [
      {
        model: Experience,
      },
      {
        model: Formation
      }
    ],
  });
};

module.exports = {
  getAllCv,
};

const { Applicant, Cv, Vacant } = require("../../db");

const applicantUpdate = async (id, body) => {
  let response = {};

  // Extraer el array de vacantes del cuerpo de la solicitud
  const { Vacants, ...applicantData } = body;

  await Applicant.update(applicantData, {
    include: [{ model: Cv }, { model: Vacant }],
    where: { id: id },
  }).then(async num => {
    if (num == 1) {
      response = body;
      const VacantsId = Vacants.map(Vacant => Vacant.id);

      // Buscar al aplicante por el ID
      const applicant = await Applicant.findByPk(id);

      // Setear las nuevas relaciones con setVacants
      await applicant.setVacants(VacantsId);
      
    }
  });

  return response;
};

module.exports = applicantUpdate;
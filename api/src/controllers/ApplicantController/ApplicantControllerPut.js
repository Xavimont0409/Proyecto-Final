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
      response = applicantData;
      
      // Buscar al aplicante por el ID
      const applicant = await Applicant.findByPk(id);

      // Obtener todas las vacantes asociadas al aplicante
      const applicantVacants = await applicant.getVacants();

      // Identificar las vacantes que deben eliminarse
      const vacantsToDelete = applicantVacants.filter(
        applicantVacant => !Vacants.includes(applicantVacant.id)
      );

      // Eliminar las relaciones de las vacantes que deben eliminarse
      await applicant.removeVacants(vacantsToDelete);
    }
  });

  return response;
};

module.exports = applicantUpdate;
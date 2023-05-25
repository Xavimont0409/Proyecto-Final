const { Vacant, ApplicantVacant, Applicant, Company } = require('../../db');
const {transporter} = require('../../config/mailer');

const postVacant = async(title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date ) =>{
    const newVacant = await Vacant.create({title, description, CompanyId, WorkdayId, WorkMethodId, SeniorityId, creation_date });
    return newVacant;
}
const postVacantRelation = async(VacantId, ApplicantId)=>{

    const applicant = await Applicant.findByPk(ApplicantId);
    const vacant = await Vacant.findByPk(VacantId);
    const companyId = vacant.CompanyId;
    const company = await Company.findByPk(companyId);

 
console.log(company.email);
    const newVacantRelation = await ApplicantVacant.create({VacantId, ApplicantId});

// Email para el aspirante que se postula

    await transporter.sendMail({
        from: '"¡Has aplicado a una vacante! POSTULACIÓN EXITOSA A VACANTE" <jobportalxcompany@gmail.com>', // sender address
        to: applicant.dataValues.email,
        subject: "¡Has aplicado a una vacante! POSTULACIÓN EXITOSA A VACANTE", // Subject line
       
        html: `
        <h1>Estimado usuario ${applicant.dataValues.name} ${applicant.dataValues.lastName},</h1>
    

        <span> ¡Gracias por postularte a la vacante de ${vacant.title} en la empresa ${company.business_name} a través de JobPortallX!. Queremos informarte que la empresa ha recibido 
        tu solicitud de manera exitosa.</span>

       
        </br>
        <br/>

        <span> En JobPortallX, nos esforzamos por facilitar el proceso de búsqueda de empleo y conectar a los candidatos con las oportunidades 
        adecuadas. Tu postulación será revisada cuidadosamente por el equipo de reclutamiento de ${company.business_name}, quienes evaluarán tus habilidades y 
        experiencia en relación con los requisitos del puesto.</span>
        
        <span> A medida que avance el proceso de selección, la empresa se pondrá en contacto contigo en caso de que tu perfil sea seleccionado
        para continuar con las siguientes etapas. Te recomendamos estar atento/a a tu correo electrónico y mantener actualizada tu información 
        en JobPortallX para facilitar la comunicación.</span>

        </br>
        </br>
        </br>

        <span>  Mientras tanto, te invitamos a explorar otras oportunidades laborales disponibles en JobPortallX y a seguir enriqueciendo tu perfil para 
        mejorar tus posibilidades de éxito en futuras postulaciones.</span>

        </br>
        </br>
        
        
        <span>En el siguiente enlace podrás ver el detalle de la vacante y de la empresa a la cual aplicaste: </span>
        </br>
        </br>
        <a href="http://localhost:3000/empleoDetail/${VacantId}"> VER DETALLE DE LA VACANTE</a>
        
        <br/>
        <br/>
        
        <span>¡Gracias nuevamente por elegir JobPortal y mucha suerte en tu búsqueda laboral!</span>
        <br/>
        <br/>
        <span> Atentamente, </span>
        <br/>
        <span> El equipo de JobPortallX </span>
        `
      });


// Email para la empresa que creó la vacante

      await transporter.sendMail({
        from: '"NOTIFICACIÓN DE POSTULACIÓN JobPortallX: Un apirante ha postulado a una vacante publicada por su empresa" <jobportalxcompany@gmail.com>', // sender address
        to: company.email,
        subject: "NOTIFICACIÓN DE POSTULACIÓN JobPortallX: Un apirante ha postulado a una vacante publicada por su empresa", // Subject line
       
        html: `
        <h1>Estimada compañía ${company.business_name},</h1>
    

        <span>Nos complace informarle que ${applicant.dataValues.name} ${applicant.dataValues.lastName} 
        ha postulado a su vacante de ${vacant.title} en JobPortallX. 
        Queremos mantenerlo/a al tanto de las últimas novedades y asegurarnos de que esté
        informado/a sobre los candidatos que muestran interés en unirse a su equipo.</span>

       
        </br>
        <br/>

        <span> ${applicant.dataValues.name} ${applicant.dataValues.lastName} ha enviado su 
        solicitud. A continuación, encontrará un link en donde podrá revisar el perfil del 
        aspirante.</span>

        </br>
        </br>

        <a href="#"> VER DETALLE DEL ASPIRANTE</a>
        
        <br/>
        <br/>

        <span>Le recomendamos que revise detenidamente el perfil en JobPortallX. 
        Puede comunicarse directamente con el aspirante utilizando la información de 
        contacto proporcionada para continuar con el proceso de selección, como programar
        una entrevista o solicitar más detalles sobre su experiencia.</span>
        
        <br/>
        <br/>

        <span>En JobPortallX, nos esforzamos por facilitar la conexión entre los empleadores
        y los candidatos ideales. Si tiene alguna pregunta o necesita asistencia adicional,
        no dude en contactarnos. Estaremos encantados de ayudarlo/a en todo lo que necesite
        durante el proceso de contratación. </span>

        <span>¡Gracias por utilizar JobPortallX y esperamos que encuentre al candidato 
        perfecto para su vacante! </span>
        <br/>
        <br/>
        <span> Atentamente, </span>
        <br/>
        <span> El equipo de JobPortallX </span>
        `
      });

    return newVacantRelation
}

module.exports={
    postVacant,
    postVacantRelation
}
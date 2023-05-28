const { Company } = require('../../db');
const {transporter} = require('../../config/mailer')

const postCompany = async (name, business_name, ruc, cuit, country, email, password, registed, photo, description, webPage, job_area) => {
  const newCompany = await Company.create({name, business_name, ruc, cuit, country, email, password, registed, photo, description, webPage, job_area});
  
  
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"¡Bienvenido/a a JobPortallX! USUARIO DE EMPRESA REGISTRADO 👻" <jobportalxcompany@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "¡Bienvenido/a a JobPortallX! USUARIO DE EMPRESA REGISTRADO 👻", // Subject line
      // text: "Hello world?", // plain text body
      html: `
      <h1>Estimado usuario ${business_name},</h1>
      <h3>Le informamos que su registro en nuestra plataforma ha sido exitoso</h3>
  
      <span>¡Gracias por registrarte en JobPortallX, la plataforma de búsqueda de talento
       más destacada! Estamos emocionados de darle la bienvenida a nuestra comunidad y 
       ayudarle a encontrar a los profesionales más cualificados para cubrir sus 
       vacantes.</span>
  
      <br/>
  
      <span> En JobPortallX, nos esforzamos por brindarle una experiencia fluida y 
      efectiva en su proceso de contratación. Nuestro equipo está dedicado a ayudarle 
      a encontrar el talento adecuado y estamos constantemente actualizando la 
      plataforma para ofrecerle características mejoradas.</span>
      <br/>
      <br/>
     <span>¡Le deseamos mucho éxito en su búsqueda de talento y esperamos que encuentre
      a los profesionales perfectos para su empresa.!</span>
     <br/>
     <br/>
     <span> Atentamente, </span>
     <br/>
     <span> El equipo de JobPortallX </span>
      `
    });
  
  return newCompany;
};

module.exports = {
  postCompany,
};

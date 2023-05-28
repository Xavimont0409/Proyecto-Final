const { Applicant } = require('../../db')
const {transporter} = require('../../config/mailer')

const postApplicant = async( name, lastName, email, cellphone, registed, password ) =>{
    const newApplicant = await Applicant.create({name, lastName, email, cellphone, registed, password });


  // send mail with defined transport object
   await transporter.sendMail({
    from: '"¡Bienvenido/a a JobPortallX! USUARIO REGISTRADO 👻" <jobportalxcompany@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "¡Bienvenido/a a JobPortallX! USUARIO REGISTRADO 👻", // Subject line
    // text: "Hello world?", // plain text body
    html: `
    <h1>Estimado usuario ${name} ${lastName},</h1>
    <h3>Le informamos que su registro en nuestra plataforma ha sido exitoso</h3>

    <span>¡Gracias por registrarte en JobPortallX, la plataforma de búsqueda de empleo líder!
     Estamos encantados de darte la bienvenida a nuestra comunidad y ayudarte a encontrar 
     las oportunidades laborales que se ajusten a tus habilidades y expectativas.</span>

    <br/>

    <span> En JobPortallX, nos esforzamos por brindarte una experiencia fácil y efectiva en 
    tu búsqueda de empleo. Nuestro equipo está constantemente actualizando la plataforma y
    agregando nuevas características para mejorar tus posibilidades de encontrar el trabajo
    ideal.</span>
    <br/>
    <br/>
   <span>¡Te deseamos mucho éxito en tu búsqueda laboral!</span>
   <br/>
   <br/>
   <span> Atentamente, </span>
   <br/>
   <span> El equipo de JobPortallX </span>
    `
  });

    return newApplicant;

    
}

module.exports = {
    postApplicant,
}
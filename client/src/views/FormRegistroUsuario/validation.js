export const validation = (applicant) => {
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\+?\d{1,3}[\s-]?\d{1,14}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?!.*\s).{1,10}$/;

  let errors = {};
  if(applicant.name){
    if(!nameRegex.test(applicant.name)) errors.name = "Nombre no valido"
    if(applicant.name.length >= 15) errors.name = "Debe tener menos de 15 caracteres"
  }
  if(applicant.lastName){
    if(!nameRegex.test(applicant.lastName)) errors.lastName = "Apellido no valido"
    if(applicant.lastName.length >= 15) errors.lastName = "Debe tener menos de 15 caracteres"
  }
  if(applicant.email){
    if(!emailRegex.test(applicant.email)) errors.email = "Email no valido"
  }
  if(applicant.cellphone){
    if(!phoneNumberRegex.test(applicant.cellphone)) errors.cellphone = "Telefono no valido"
  }
  if(applicant.password){
    if(!passwordRegex.test(applicant.password)) errors.password = "Contraseña no valida"
  }
  return errors
};

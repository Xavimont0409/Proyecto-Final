export const validation = (applicant) => {
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\+?\d{1,3}[\s-]?\d{1,14}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])(?!.*\s).{1,10}$/;
  const regexSimbol = /[\*\!]{1,2}/;
  const regexMayus = /[A-Z]{1}/;
  const regexNum = /\d.*\d/;

  let errors = {};
  if(applicant.name){
    if(!nameRegex.test(applicant.name)) errors.name = "Nombre no valido"
    if(applicant.name.length >= 15) errors.name = "Debe tener menos de 20 caracteres"
  }
  if(applicant.lastName){
    if(!nameRegex.test(applicant.lastName)) errors.lastName = "Apellido no valido"
    if(applicant.lastName.length >= 15) errors.lastName = "Debe tener menos de 20 caracteres"
  }
  if(applicant.email){
    if(!emailRegex.test(applicant.email)) errors.email = "Email no valido"
  }
  if(applicant.cellphone){
    if(!phoneNumberRegex.test(applicant.cellphone)) errors.cellphone = "Telefono no valido"
  }
  if(applicant.password){
    if(!regexSimbol.test(applicant.password)) errors.password = "Debe tener almenos 1 simbolo"
    if(!regexMayus.test(applicant.password)) errors.password ="Debe tener una letra mayuscula"
    if(!regexNum.test(applicant.password)) errors.password = "Debe tener almenos 2 numeros"
    if(applicant.password.length >= 12) errors.password = "Debe tener menos de 12 caracteres"
  }
  return errors
};

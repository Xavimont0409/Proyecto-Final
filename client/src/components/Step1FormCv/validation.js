function validation(obj) {
  const requiredProperties = ['dni', 'phone', 'address', 'photo', 'linkedin', 'skill', 'personal_description'];

  for (const prop of requiredProperties) {
    if (obj[prop] === '') {
      return false;
    }
  }

  return true;
}

export default validation;
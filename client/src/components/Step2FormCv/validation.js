function validation(obj) {
  const requiredProperties = ['profession', 'educational_institution', 'skill', 'personal_description'];

  for (const prop of requiredProperties) {
    if (obj[prop] === '') {
      return false;
    }
  }

  return true;
}

export default validation;
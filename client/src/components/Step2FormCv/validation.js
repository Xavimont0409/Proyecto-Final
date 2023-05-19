function validation(obj) {
  const requiredProperties = ['profession', 'country', 'educational_institution', 'state', 'initial_date'];

  for (const prop of requiredProperties) {
    if (obj[prop] === '') {
      return false;
    }
  }

  return true;
}

export default validation;
function validation(obj) {
  const requiredProperties = ['company', 'charge', 'experience_level', 'location', 'start_date'];

  for (const prop of requiredProperties) {
    if (obj[prop] === '') {
      return false;
    }
  }

  return true;
}

export default validation;
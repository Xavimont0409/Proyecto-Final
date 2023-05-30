function validation(obj) {
  const requiredProperties = ['dni', 'phone', 'address', 'photo', 'linkedin', 'initial_date', 'country'];

  for (const prop of requiredProperties) {
    if (obj[prop] === '') {
      return false;
    }
  }

  return true;
}

export default validation;
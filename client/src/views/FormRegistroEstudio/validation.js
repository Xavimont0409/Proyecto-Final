function validation(obj) {
  const requiredProperties = ['title', 'country', 'study_level', 'study_area', 'institute', 'state', 'start_date'];

  for (const prop of requiredProperties) {
    if (obj[prop] === '') {
      return false;
    }
  }

  return true;
}

export default validation;
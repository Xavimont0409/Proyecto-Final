function validateFormInputs(inputs) {
    for (const input of Object.values(inputs)) {
      if ( input === "") {
        return false;
      }
    }
    return true;
  }


  export default validateFormInputs;
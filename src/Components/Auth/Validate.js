export const Validate=values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
      } else if (
       values.password.length < 6
      ) {
        errors.email = 'Invalid name ';
      }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
      } else if (
       values.password.length < 6
      ) {
        errors.password = 'Invalid password ';
      }
      if (!values.confirm) {
        errors.confirm = 'Required';
      } else if (
       values.confirm.value  !== values.password
      ) {
        errors.confirm = 'Password is not match ';
      }
    return errors;
  }
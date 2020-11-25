export const Validate=values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Username Required';
      } else if (
       values.name.length < 4
      ) {
        errors.name = 'Invalid name ';
      }
    if (!values.email) {
      errors.email = 'Email Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Password Required';
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
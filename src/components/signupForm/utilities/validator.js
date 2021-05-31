/**
 * Input validation rules for each input we have.
 *
 * You name it, we "probably" got it!
 *
 * @returns
 */
const validator = (values = {}) => {
  let errors = {};
  let inputNames = {
    firstName: "First name",
    lastName: "Last name",
    phoneNumber: "Phone number",
    email: "E-mail",
    password: "Password",
    confirmPassword: "Confirmed Password",
  };

  for (const key in inputNames) {
    if (!values[key]) {
      errors[key] = `${inputNames[key]} is required`;
    }
  }
  /**
   * Email
   */
  if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = `${inputNames.email} is invalid`;
  }

  /**
   * Phone Number
   */
  if (values.phoneNumber && !/\([\d]{3}\) [\d]{3}-[\d]{4}/.test(values.phoneNumber)) {
    errors.phoneNumber = `${inputNames.phoneNumber} is invalid`;
  }

  /**
   * Password
   */
  if (values.password && values.password.length < 8) {
    errors.password = `${inputNames.password} must be 8 or more characters`;
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = `${inputNames.confirmPassword} does not match`
  }

  return errors;
};

export default validator;

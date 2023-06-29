import { toast } from "react-hot-toast";

// Validations

// Validate Username
const usernameValidator = async (values) => {
  return verifyUsername({}, values);
};

// Validate Password
const passwordValidator = async (values) => {
  return verifyPassword({}, values);
};

const resetPasswordValidator = async (values) => {
  const errors = verifyPassword({}, values);
  if (values.password !== values.confirmPass) {
    errors.equal = toast.error("Password doesn't Match...!");
  }
  return errors;
};

const emailValidator = async (values) => {
  return verifyEmail({}, values);
};

// ***************************************************************************

// Verifications

// Verify Username
const verifyUsername = (error = {}, values) => {
  if (!values.username) error.username = toast.error("Username required...!");
  else if (values.username.includes(" "))
    error.username = toast.error("Invalid Username...!");
  return error;
};

// Verify Password

const verifyPassword = (error = {}, values) => {
  const specialChars = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/;

  if (!values.password) error.password = toast.error("Password required...!");
  else if (values.password.includes(" "))
    error.password = toast.error("Wrong Password");
  else if (values.password.length < 6)
    error.password = toast.error("Password Must be more than 6 characters");
  else if (!specialChars.test(values.password))
    error.password = toast.error("Password Must include special Characters");

  return error;
};

// Verify Email

const verifyEmail = (error = {}, values) => {
  if (!values.email) error.email = toast.error("Email required...!");
  else if (
    values.email.includes(" ") ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  )
    error.email = toast.error("Invalid Email address...!");

  return error;
};

export {
  usernameValidator,
  passwordValidator,
  resetPasswordValidator,
  emailValidator,
};

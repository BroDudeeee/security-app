import { toast } from "react-hot-toast";

const userValidator = async (values) => {
  return verifyUsername({}, values);
};

const verifyUsername = (error = {}, values) => {
  if (!values.username) error.username = toast.error("Username required...!");
  else if (values.username.includes(" "))
    error.username = toast.error("Invalid Username...!");
  return error;
};

export { userValidator };

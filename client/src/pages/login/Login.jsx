import { Link } from "react-router-dom";

import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import {
  emailValidator,
  passwordValidator,
} from "../../middleware/UserValidator";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      passwordValidator(values), emailValidator(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <section className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="card">
        <h1 className="hello-h1">Login</h1>
        <span className="hello-span">Welcome Again</span>
        <form className="form" onSubmit={formik.handleSubmit}>
          <input
            {...formik.getFieldProps("email")}
            className="user-input"
            type="email"
            placeholder="Email"
          />
          <input
            {...formik.getFieldProps("password")}
            className="user-input"
            type="text"
            placeholder="Password"
          />
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <span className="link-span">
          Not a Member?{" "}
          <Link className="link" to={"/register"}>
            Register Now
          </Link>
        </span>
      </section>
    </section>
  );
};

export default Login;

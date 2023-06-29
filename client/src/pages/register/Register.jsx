import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from "../../middleware/UserValidator";
import { useState } from "react";
import { toBase64 } from "../../middleware/convertBase64";

const Register = () => {
  const [file, setFile] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      usernameValidator(values),
        passwordValidator(values),
        emailValidator(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  const onUpload = async (file) => {
    const base64 = await toBase64(file);
    setFile(base64);
  };

  return (
    <section className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="card">
        <h1 className="hello-h1">Register</h1>

        <label htmlFor="profile-pic" className="profile-pic-label">
          <img className="avatar" src={file || avatar} alt="avatar" />
        </label>
        <input
          type="file"
          name=""
          id="profile-pic"
          onChange={(e) => onUpload(e.target.files[0])}
        />
        <form className="form" onSubmit={formik.handleSubmit}>
          <input
            {...formik.getFieldProps("username")}
            className="user-input"
            type="text"
            placeholder="Username"
          />
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
            Register
          </button>
        </form>
        <span className="link-span">
          Already a Member{" "}
          <Link className="link" to={"/login"}>
            Login Now
          </Link>
        </span>
      </section>
    </section>
  );
};

export default Register;

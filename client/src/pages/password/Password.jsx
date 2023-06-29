import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { passwordValidator } from "../../middleware/UserValidator";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "MyPassword123*",
    },
    validate: passwordValidator,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => console.log(values),
  });

  return (
    <section className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="card">
        <h1 className="hello-h1">Hello Again!</h1>
        <span className="hello-span">Explore More by connecting with us</span>
        <img className="avatar" src={avatar} alt="avatar" />
        <form className="form" onSubmit={formik.handleSubmit}>
          <input
            {...formik.getFieldProps("password")}
            className="user-input"
            type="text"
            placeholder="Password"
          />
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
        <span className="link-span">
          Not a Member{" "}
          <Link className="link" to={"/recovery"}>
            Recovery
          </Link>
        </span>
      </section>
    </section>
  );
};

export default Password;

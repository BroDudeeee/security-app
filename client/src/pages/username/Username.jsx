import { Link } from "react-router-dom";
import "./username.css";
import avatar from "../../assets/avatar.png";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { userValidator } from "../../middleware/UserValidator";

const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: userValidator,
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
            {...formik.getFieldProps("username")}
            className="user-input"
            type="text"
            placeholder="Username"
          />
          <button type="submit" className="submit-btn">
            Let&apos;s Go
          </button>
        </form>
        <span className="link-span">
          Not a Member{" "}
          <Link className="link" to={"/register"}>
            Register Now
          </Link>
        </span>
      </section>
    </section>
  );
};

export default Username;

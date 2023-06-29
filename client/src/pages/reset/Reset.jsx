import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { resetPasswordValidator } from "../../middleware/UserValidator";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "MyPassword123*",
      confirmPass: "",
    },
    validate: resetPasswordValidator,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => console.log(values),
  });

  return (
    <section className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="card">
        <h1 className="hello-h1">Reset</h1>
        <span className="hello-span" style={{ marginBottom: "30px" }}>
          Enter New Password
        </span>

        <form className="form" onSubmit={formik.handleSubmit}>
          <input
            {...formik.getFieldProps("password")}
            className="user-input"
            type="text"
            placeholder="Password"
          />

          <input
            {...formik.getFieldProps("confirmPass")}
            className="user-input"
            type="text"
            placeholder="Confirm Password"
          />

          <button type="submit" className="submit-btn">
            Reset
          </button>
        </form>
      </section>
    </section>
  );
};

export default Reset;

import { Toaster } from "react-hot-toast";

const Recovery = () => {
  return (
    <section className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="card">
        <h1 className="hello-h1">Recovery</h1>
        <span className="hello-span" style={{ marginBottom: "20px" }}>
          Enter The OTP to recover your Password
        </span>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input className="user-input" type="text" placeholder="Password" />
          <button type="submit" className="submit-btn">
            Recover
          </button>
        </form>
        <span className="link-span">
          Didn&apos;t Get an OTP?<button className="small-btn">Resend</button>
        </span>
      </section>
    </section>
  );
};

export default Recovery;

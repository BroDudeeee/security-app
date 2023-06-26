import { Link } from "react-router-dom";
import "./username.css";
import avatar from "../../assets/avatar.png";

const Username = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="container">
      <section className="card">
        <h1 className="hello-h1">Hello Again!</h1>
        <span className="hello-span">Explore More by connecting with us</span>
        <img className="avatar" src={avatar} alt="avatar" />
        <form className="form" onSubmit={handleSubmit}>
          <input className="user-input" type="text" placeholder="Username" />
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

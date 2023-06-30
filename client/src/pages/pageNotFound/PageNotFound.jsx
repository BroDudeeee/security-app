import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="container">
      {/* <h1 style={{ fontSize: "50px" }}>Page Not Found</h1> */}
      <Link to={"/"}>
        <img
          src="https://media.giphy.com/media/iPnLFwV5pPBsc/giphy.gif"
          className="notFound-img"
          alt=""
        />
      </Link>
    </section>
  );
};

export default PageNotFound;

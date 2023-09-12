import { useNavigate } from "react-router";
import "../Home/Home.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home__page">
      <h1>WELCOME TO SNAP-UI</h1>

      <h3>
        Build Minimalistic and Beautiful UI using the Snap UI Component library.
      </h3>

      <button
        onClick={() => navigate("/components")}
        className="get__started__btn"
      >
        Get Started
      </button>
    </section>
  );
};
